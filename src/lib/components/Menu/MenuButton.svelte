<script>
  export let label

  import Dropdown from "$lib/components/Dropdown.svelte"

  // Dropdown state management
  let isOpen = false

  function toggleIsOpen() {
    isOpen = !isOpen
  }
</script>

<div>
  <button on:click={toggleIsOpen}>
    { label }
  </button>

  <Dropdown {isOpen} {toggleIsOpen} width={300}>
    <div class="dropdown__content">
      <slot />
    </div>
  </Dropdown>
</div>

<style>
  .dropdown__content {
    padding: 0.7em 1em;
  }

  button {
    background-color: var(--bg-lighter);
    padding: 0.4em 1em;

    border: none;
    color: white;
    border-radius: var(--radius);

    cursor: pointer;
  }


  @media (max-width: 30em) {
    button {
      font-size: 0.75rem;
    }
  }
</style>
