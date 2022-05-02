import dictionary from "$lib/data/dictionary.js"

function isMatch(string, target) {
  // Compare the two strings without considering accents and casing
  
  return target?.localeCompare(string, "el", { sensitivity: "base" }) === 0
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

  return allSynonyms.filter(item => item != query)
}
