<script>
  import SynonymButton from "$lib/components/SynonymButton.svelte"

  export let selectedTab
  export let synonyms
</script>

<div class="synonyms__container">
  {#each synonyms as synonym, index}
    <SynonymButton
      {synonym}
      {index}
      key={selectedTab + index}
    />
  {/each}
</div>


<style>
  .synonyms__container {
    margin: 0 auto;
    margin-top: 5em;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-wrap: wrap;
    gap: 0.5em;

    padding: 0 var(--padding-x);
    max-width: 550px;
  }
</style>
