import dictionary from "$lib/data/dictionary.js"

function compareGreek(string, target) {
  // Compare the two strings without considering accents and casing
  
  return target.localeCompare(string, "el", { sensitivity: "base" }) === 0
}

function isMatch(string, target) {
  
  // Better search results for special case of greek verb ending
  if (compareGreek(string.slice(string.length - 2), "άω")) {
    string = string.slice(0, string.length - 2) + "ώ"
  }

  return compareGreek(string, target)
}

export function searchFromKey(query) {
  // Check if the word is a dictionary key
  for (let key of Object.keys(dictionary)) {
    if (isMatch(query, key)) {
      return dictionary[key]
    }
  }

  return []
}

export function searchDeep(query) {
  let allSynonyms = []

  // If the word is not a key in the dictionary
  // Search it in the synonyms array of each entry
  for (let [word, synonyms] of Object.entries(dictionary)) {

    for (let synonym of synonyms) {
      if (isMatch(query, synonym)) {

        // Push synonyms without the searched word being included
        allSynonyms = allSynonyms.concat(
          [...synonyms.filter(item => !isMatch(query, item) && !allSynonyms.includes(item)), word]
        )

        break
      }
    }
  }

  return allSynonyms
}
