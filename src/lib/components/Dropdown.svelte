<script>
  import { scale } from "svelte/transition"
  import { clickOutside } from "svelte-use-click-outside"

  export let isOpen, toggleIsOpen
</script>

{#if isOpen}
  <div
    use:clickOutside={toggleIsOpen}

    on:click|stopPropagation

    transition:scale={{ duration: 150 }}
  >
    <slot />
  </div>
{/if}

<style>
  div {
    position: absolute;
    margin-top: 1em;

    font-size: 0.85rem;

    border-radius: var(--radius);
    background-color: var(--bg-lighter);

    display: flex;
    flex-direction: column;

    cursor: initial;
    z-index: 999;
  }
</style>
