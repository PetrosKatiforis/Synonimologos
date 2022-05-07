<script>
  import SearchBar from "$lib/components/SearchBar.svelte"  
  import SynonymTabs from "$lib/components/SynonymTabs.svelte"
  import MenuBar from "$lib/components/Menu/MenuBar.svelte"
  import Synonyms from "$lib/components/Synonyms.svelte"

  import IntroductionMessage from "$lib/components/IntroductionMessage.svelte"

  import { completeSearch } from "$lib/utils/wordSearch.js"

  // This function will be executed when the search bar is submitted
  function search(event) {
    const query = event.detail
    
    searchData = completeSearch(query)
    selectedKey = Object.keys(searchData)[0]
  }

  let searchData = {}
  let selectedKey 
</script>

<main>
  <MenuBar />

  <div class="searchbar__area">
    <img src="Synonimologos.svg" />

    <SearchBar
      on:search={search} 
    />
  </div>

  {#if Object.keys(searchData).length > 0}
    <SynonymTabs
      tabs={Object.keys(searchData)} 
      bind:selectedKey
    />

    <Synonyms
      selectedTab={selectedKey}
      synonyms={searchData[selectedKey]}
    />
  {:else}

    <IntroductionMessage />
  {/if}
</main>

<style>
  img {
    width: 250px;
    margin-bottom: 2em;
  }

  .searchbar__area {
    padding: 0 var(--padding-x);

    display: flex;
    flex-direction: column;

    align-items: center;
  }
</style>
