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
    border: 2px dotted var(--bg-border);
    border-radius: 999px;

    background-color: var(--bg-lighter);
    background: none;
    color: white;

    padding: 0.6em 1.1em;
    cursor: pointer;
  }
</style>
