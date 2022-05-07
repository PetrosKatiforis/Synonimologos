<script>
  import Dropdown from "$lib/components/Dropdown.svelte"
  import IconButton from "$lib/components/IconButton.svelte"
  
  import MdStarBorder from "svelte-icons/md/MdStarBorder.svelte"
  import MdRemoveRedEye from "svelte-icons/md/MdRemoveRedEye.svelte"
  import MdInfoOutline from "svelte-icons/md/MdInfoOutline.svelte"

  import { favourites } from "$lib/stores/favouritesStore.js"

  function favourite() {
    favourites.update(data => {
      console.log(data)

      if (data.includes(synonym)) {
        return data
      }

      return [...data, synonym]
    })
  }

  function viewSynonyms() {
    alert("Viewed synonyms!")
  }

  let options = [
    { label: "Αποθήκευση", icon: MdStarBorder, onClick: favourite },
    { label: "Συνώνυμα", icon: MdInfoOutline, onClick: viewSynonyms },
  ]

  export let isOpen, toggleIsOpen 
  export let synonym
</script>

<Dropdown {isOpen} {toggleIsOpen}>
  <div class="options__container">
    <IconButton
      label="Δες Ορισμό"
      href={`https://el.wiktionary.org/wiki/${synonym}`}
    >

      <MdRemoveRedEye />
    </IconButton>

    {#each options as option (option.label)}
      
      <IconButton 
        label={option.label}
        on:click={() => {
          toggleIsOpen()

          option.onClick()
        }}
      >
        <svelte:component this={option.icon} />
      </IconButton> 
    {/each}
  </div>
</Dropdown>

<style>
  .options__container {
    padding: 0.8em;

    display: flex;
    flex-direction: column;

    gap: 0.8em;
  }
</style>
