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

export function completeSearch(query) {
  let searchResults = {}

  for (let [key, synonyms] of Object.entries(dictionary)) {
    // Check if the entry's key is a match, if yes append the synonyms directly
    if (isMatch(query, key)) {
      searchResults[synonyms[0]] = synonyms
      continue
    }

    // Check if the query is included inside the synonyms list
    for (let synonym of synonyms) {
      if (isMatch(query, synonym)) {

        // Remove the duplicate item 
        searchResults[key] = [...synonyms.filter(item => !isMatch(query, item)), key]
        
        break
      }
    }
  }

  return searchResults
}
