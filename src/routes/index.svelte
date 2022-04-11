<script>
  import WordSearch from "$lib/components/WordSearch.svelte"
</script>

<svelte:head>
  <title>Synonimologos</title>
</svelte:head>

<main>
  <div>
    <h1>Synonimologos</h1>

    <WordSearch />
  </div>
</main>

<style>
  div {
    width: 500px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  main {
    min-height: 100vh;

    display: flex;
    justify-content: center;

    margin-top: 10em;
  }

  h1 {
    font-size: 2.2rem;
    text-align: center;
    margin-bottom: 0.8em;
  }
</style>
