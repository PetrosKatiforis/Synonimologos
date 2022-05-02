<script>
  import WordSearch from "$lib/components/WordSearch.svelte"
</script>

<svelte:head>
  <title>Συνωνημολόγος Online</title>
</svelte:head>

<main>
  <div>
    <img src="/Logo.svg" />

    <WordSearch />
  </div>
</main>

<style>
  img {
    margin-bottom: 1.65em;
    width: 230px;
  }

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

    margin-top: 3.5em;
  }

  h1 {
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
    margin-bottom: 0.8em;
  }

  @media (min-width: 30em) {
    main {
      margin-top: 6em;
    }

    img {
      width: 280px;
    }
  }
</style>
