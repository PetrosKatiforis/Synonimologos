<script>
  import { fade, scale } from "svelte/transition"

  export let data
</script>

<div>
  {#each data.synonyms as synonym, index (synonym)}
    <span
      class="synonym"
      in:scale={{ delay: 200 * (index + 1) }}
      out:fade={{ duration: 200 }}
    >
      { synonym }
    </span>
  {/each}
</div>

<style>
  div {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    gap: 0.5em;
    flex-wrap: wrap;
  }

  span {
    background: white;
    border: 1px solid var(--bg-border);

    border-radius: 0.4em;
    padding: 0.4em 0.8em;
  }

  h1 {
    font-size: 1.3rem;
    margin-bottom: 0.5em;
  }
</style>
