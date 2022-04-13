<script>
  import { searchDeep } from "$lib/utils/wordSearch.js"
  import { fade, scale } from "svelte/transition"

  export let data
  
  // The first index for the new deep synonyms
  let firstDeepIndex = data.synonyms.length
  let hasDeepSearched = false

  function searchMore() {
    data.synonyms = data.synonyms.concat(data.deepSynonyms)
    data.deepSynonyms = []

    hasDeepSearched = true
  }
</script>

<div>
  {#each data.synonyms as synonym, index (index)}
    <span
      class="synonym"
      in:scale={{ delay: 200 * ((hasDeepSearched ? index - firstDeepIndex : index) + 1) }}
      out:fade={{ duration: 200 }}
    >
    <a target="_blank" href={`https://el.wiktionary.org/wiki/${synonym}`}>{ synonym }</a>
    </span>
  {/each}

  {#if data.deepSynonyms.length}
    <button 
      on:click={searchMore}
      in:scale={{ delay: 200 * (data.synonyms.length + 2) }}
    >
      Περισσότερες
    </button>
  {/if}
</div>

<style>
  button {
    background: var(--fg-primary);
    border: none;

    color: white;
    border-radius: var(--radius);
    padding: 0.4em 0.8em;
  }

  div {
    display: flex;

    gap: 0.5em;
    flex-wrap: wrap;
  }

  span {
    background: var(--bg-input);
    border: 1px solid var(--bg-border);

    border-radius: var(--radius);
    padding: 0.4em 0.8em;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1 {
    font-size: 1.3rem;
    margin-bottom: 0.5em;
  }

  @media (min-width: 30em) {
    div {
      justify-content: center;
    }
  }
</style>
