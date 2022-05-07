<script>
  import IconButton from "$lib/components/IconButton.svelte"
  import MdStarBorder from "svelte-icons/md/MdStarBorder.svelte"

  import Dropdown from "$lib/components/Dropdown.svelte"
  import { favourites } from "$lib/stores/favouritesStore.js"

  let isOpen = false

  function toggleIsOpen() {
    // Toggle the dropdown's activated state

    isOpen = !isOpen
  }
</script>

<div on:click={toggleIsOpen}>
  <IconButton label="Αγαπημένα">
    <MdStarBorder />
  </IconButton>
  
  <Dropdown {isOpen} {toggleIsOpen}>
    <div class="dropdown__content">
      {#each $favourites as favourite}
        <p>{ favourite }</p>

      {:else}
        <p>Η λίστα είναι ακόμα άδεια...</p>

      {/each}
    </div>
  </Dropdown>
</div>

<style>
  .dropdown__content {
    width: 120px;

    display: flex;
    flex-direction: column;
    
    padding: 0.5em;
    gap: 0.5em;

    align-items: center;
  }
</style>
