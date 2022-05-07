<script>
  import { scale } from "svelte/transition"
  import { clickOutside } from "svelte-use-click-outside"

  export let isOpen, toggleIsOpen
  export let width

  let x
  let element 

  $: if (element && isOpen) {
    const rect = element.getBoundingClientRect()

    let parentPosition = element.parentElement.getBoundingClientRect().left
    x = Math.min(window.innerWidth - width, parentPosition)
  }
</script>

{#if isOpen}
  <div
    class="dropdown__container"
    style="left: {x}px; width: {width}px;"

    use:clickOutside={toggleIsOpen}

    bind:this={element}
    on:click|stopPropagation

    transition:scale={{ duration: 150 }}
  >
    <slot />
  </div>
{/if}

<style>
  .dropdown__container {
    position: absolute;
    margin-top: 1em;

    font-size: 0.85rem;

    border-radius: var(--radius);

    border: 1px solid var(--bg-border);
    background-color: var(--bg-lighter);

    display: flex;
    flex-direction: column;

    max-width: 100vw;

    cursor: initial;
    z-index: 999;
  }

  div :global(> *) {
    max-width: 100%;
  }
</style>
