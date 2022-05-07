<script>
  import { synonym } from "$lib/stores/synonymsStore.js"
  import MdSearch from "svelte-icons/md/MdSearch.svelte"

  let searchQuery

  function updateCurrentSynonym() {
    synonym.set(searchQuery.trim())
  }

  function onInputKey(event) {
      
    // If the enter key is pressed, fire the search function
    if (event.key === "Enter") {
      updateCurrentSynonym()
    }
  }

  synonym.subscribe(value => {
    searchQuery = value
  })
</script>

<div id="searchbar">
  <input
    placeholder="Πληκτρολόγησε τη λέξη για να βρεις μια λίστα συνωνύμων"
    
    on:keydown={onInputKey}
    bind:value={searchQuery}
  />

  <div
    class="icon__container"
    on:click={updateCurrentSynonym}
  >
    <MdSearch />
  </div>
</div>

<style>
  .icon__container {
    width: 22px;

    cursor: pointer;
    margin-left: 1em;
  }

  #searchbar {
    width: 100%;
    max-width: 500px;

    background-color: var(--bg-lighter);
    border-radius: var(--radius);

    padding: 0.4em 0.8em;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  input {
    background: none;
    outline: none;
    border: none;

    color: white;
    
    font-size: 0.8rem;
    flex: 1;
  }
</style>
