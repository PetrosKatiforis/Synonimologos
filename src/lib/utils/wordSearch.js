import dictionary from "$lib/data/dictionary.js"

export function searchFromKey(query) {
  // Check if the word is a dictionary key
  if (query in dictionary) {
    return dictionary[query]
  }

  return []
}

export function searchDeep(query) {
  let allSynonyms = []

  // If the word is not a key in the dictionary
  // Search it in the synonyms array of each entry
  for (let [word, synonyms] of Object.entries(dictionary)) {

    if (synonyms.includes(query)) {
      // Push synonyms without the searched word being included
      allSynonyms = allSynonyms.concat([...synonyms.filter(item => item != query), word])
    }
  }

  return allSynonyms
}
