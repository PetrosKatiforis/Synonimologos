<script>
  import FavouritesButton from "$lib/components/Menu/FavouritesButton.svelte"
  import MenuButtons from "$lib/components/Menu/MenuButtons.svelte"
</script>

<div id="menubar">
  <MenuButtons />

  <FavouritesButton />
</div>

<style>
  #menubar {
    display: flex;
    align-items: center;
    justify-content: space-between;

    flex-wrap: wrap;
    gap: 1em;

    margin-bottom: 5em;

    padding: 0 var(--padding-x);
  }

  @media (min-width: 55em) {
    #menubar {
      display: flex;
      margin-bottom: 6em;
    }
  }
</style>
