<script>
  import { fade, scale } from "svelte/transition"
  import SynonymsOptions from "$lib/components/SynonymOptions.svelte"

  export let key
  export let index
  export let synonym

  const inDuration = 150

  // Dropdown popup state management
  let isOpen = false

  function toggleIsOpen() {
    isOpen = !isOpen
  }
</script>

{#key key}
  <button
    in:scale={{ 
      delay: inDuration * index, 
      duration: inDuration
    }}

    on:click={toggleIsOpen}
  >
    { synonym }

    <SynonymsOptions 
      {isOpen} {toggleIsOpen} word={synonym} 
    />
  </button>
{/key}

<style>
  button {
    border: 1px solid var(--bg-border);
    border-radius: 20em;

    background: none;
    color: white;

    padding: 0.7em 1.2em;
    cursor: pointer;
  }
</style>
