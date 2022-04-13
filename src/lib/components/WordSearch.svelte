<script>
  import { searchFromKey, searchDeep } from "$lib/utils/wordSearch.js"
  import Word from "$lib/components/Word.svelte"

  // State for the input's search query
  let searchQuery
  let wordData = {}

  function onFormSubmit() {
    // Trim left and right spaces
    searchQuery = searchQuery.trim()

    if (searchQuery == wordData.word) return

    let synonyms = searchFromKey(searchQuery)
    let deepSynonyms = searchDeep(searchQuery)

    // If absolutely nothing was found
    if (!synonyms.length && !deepSynonyms.length) {
      wordData = {}
      return
    }

    // If there are only deep synonyms, make them the primary choice 
    if (!synonyms.length) {
        synonyms = deepSynonyms
        deepSynonyms = []
    }

    wordData = {
      word: searchQuery,
      synonyms,
      deepSynonyms
    }
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

{:else}
  <p>Λιπόμαστε αλλά δεν βρίκαμε τίποτα... Προσπαθήστε ξανά στην ενεργητική ή στο αρσενικό γένος</p>
{/if}

<style>
  p {
    text-align: center;
  }

  form {
    background: var(--bg-input);
    border-radius: var(--radius);

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 4em;
  }

  @media (min-width: 30em) {
    form {
      width: 400px;
    }
  }

  input {
    border: none;
    color: white;

    background: none;
    border-radius: var(--radius) 0 0 var(--radius);
    padding: 0.5em 1em;

    width: 100%;
    outline: none;
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: 0 var(--radius) var(--radius) 0;

    background: var(--fg-primary);
    color: white;
    padding: 0.6em 1em;
  }
</style>
