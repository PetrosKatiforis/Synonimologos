<script>
  export let label

  // Optional href prop, will automatically convert the button into a link
  export let href = undefined
</script>

<div 
  class="icon__button"
  on:click
>
  <div 
    class="icon__container"
    style="width: 20px"
  >
    <slot />
  </div>

  {#if href}
    <a {href} target="_blank">{ label }</a>

  {:else}
    <p>{ label }</p>
  {/if}
</div>

<style>
  .icon__button {
    cursor: pointer;

    display: flex;
    align-items: center;
  }

  p, a  {
    font-size: 0.9rem;
    margin-left: 0.8em;
  }

  a {
    text-decoration: none;
    color: white;
  }
</style>
