<script>
  import SearchBar from "$lib/components/SearchBar.svelte"  
  import SynonymTabs from "$lib/components/SynonymTabs.svelte"
  import MenuBar from "$lib/components/Menu/MenuBar.svelte"
  import Synonyms from "$lib/components/Synonyms.svelte"

  import IntroductionMessage from "$lib/components/IntroductionMessage.svelte"

  import { completeSearch } from "$lib/utils/wordSearch.js"
  import { synonym } from "$lib/stores/synonymsStore.js"
  import { notify } from "$lib/stores/notificationStore.js"

  let searchData = {}
  let selectedKey
  
  // This function will be executed when the current synonym is updated, however that may happen
  synonym.subscribe(value => {
    if (!value) return

    searchData = completeSearch(value)
    selectedKey = Object.keys(searchData)?.[0]

    if (Object.keys(searchData).length < 1) {

      notify(
        "Η λέξη δεν βρέθηκε!",
        "Δείτε προσεκτικά τις οδηγίες χρήσεις ή επικοινωνήστε μαζί μας. Προσέξτε την ορθογραφία!"
      )
    }
  })
</script>

<main>
  <MenuBar />

  <div class="searchbar__area">
    <img src="Synonimologos.svg" />

    <SearchBar />
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
