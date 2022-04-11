<script>
  import dictionary from "$lib/data/dictionary"
  import Word from "$lib/components/Word.svelte"

  // State for the input's search query
  let searchQuery
  let wordData = {}

  function searchWord(searchedWord) {
    // TODO: Search for the word

    // Check if the word is a dictionary key
    if (searchedWord in dictionary) {
      return {
        word: searchedWord,
        synonyms: dictionary[searchedWord]
      }
    }

    // If the word is not a key in the dictionary
    // Search it in the synonyms array of each entry
    for (let [word, synonyms] of Object.entries(dictionary)) {

      if (synonyms.includes(searchedWord)) {
        return {
          word: searchedWord,
          synonyms: [...synonyms.filter(item => item != searchedWord), word]
        }
      }
    }

    return {}
  }

  function onFormSubmit() {
    if (searchQuery == wordData.word) return

    wordData = searchWord(searchQuery)
  }
</script>

<form on:submit|preventDefault={onFormSubmit}>
  <input 
    bind:value={searchQuery}
    placeholder="Για ποιά λέξη ψάχνεις συνώνυμα;"
  />

  <button type="submit">
    Αναζήτηση
  </button>
</form>

{#if wordData.word}
  <!-- Allows for a transition when the state changes -->
  {#key wordData}
    <Word data={wordData} />
  {/key}
{/if}

<style>
  form {
    background: white;
    border-radius: 5px;
    width: 400px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 4em;
  }

  input {
    border: none;
    border-radius: 5px 0 0 5px;
    padding: 0.5em 1em;

    width: 100%;
    outline: none;
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: 0 5px 5px 0;

    background: #CDCDCD;
    padding: 0.6em 1em;
  }
</style>
