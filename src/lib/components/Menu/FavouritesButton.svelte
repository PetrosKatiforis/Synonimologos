<script>
  import MdStarBorder from "svelte-icons/md/MdStarBorder.svelte"
  import IconButton from "$lib/components/IconButton.svelte"
  import Dropdown from "$lib/components/Dropdown.svelte"

  import { favourites } from "$lib/stores/favouritesStore.js"
  import { synonym } from "$lib/stores/synonymsStore.js"

  let isOpen = false

  function updateSynonym(word) {
    synonym.set(word)

    toggleIsOpen()
  }

  function toggleIsOpen() {
    // Toggle the dropdown's activated state

    isOpen = !isOpen
  }
</script>

<div on:click={toggleIsOpen}>
  <IconButton label="Αγαπημένα">
    <MdStarBorder />
  </IconButton>
  
  <Dropdown {isOpen} {toggleIsOpen} width={150}>
    <div class="dropdown__content">
      {#each $favourites as favourite}
        <p
          style="cursor: pointer;"
          on:click={() => updateSynonym(favourite)}
        >
          { favourite }
        </p>

      {:else}
        <p>Η λίστα είναι ακόμα άδεια...</p>

      {/each}
    </div>
  </Dropdown>
</div>

<style>
  .dropdown__content {
    text-align: center;

    display: flex;
    flex-direction: column;
    
    max-height: 200px;

    overflow-y: scroll;

    align-items: center;
  }

  .dropdown__content :global(> *) {
    padding: 1em 0.5em;
    width: 100%;

    border-bottom: 1px solid var(--bg-border);
  }
</style>
