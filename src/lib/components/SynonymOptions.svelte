<script>
  import Dropdown from "$lib/components/Dropdown.svelte"
  import IconButton from "$lib/components/IconButton.svelte"
  
  import MdStarBorder from "svelte-icons/md/MdStarBorder.svelte"
  import MdRemoveRedEye from "svelte-icons/md/MdRemoveRedEye.svelte"
  import MdInfoOutline from "svelte-icons/md/MdInfoOutline.svelte"

  import { favourites } from "$lib/stores/favouritesStore.js"
  import { synonym } from "$lib/stores/synonymsStore.js"
  import { notify } from "$lib/stores/notificationStore.js"

  function favourite() {
    notify(
      "Η λέξη αποθηκεύτηκε!", 
      "Μπορείτε πλέον να αναζητήσετε εύκολα τη λέξη σας στη λίστα των αγαπημένων"
    )

    favourites.update(data => {

      // Check if the word is already in the favourites
      if (data.includes(word)) {
        return data
      }

      return [...data, word]
    })
  }

  // Updates the application's current synonym
  function viewSynonyms() {
    synonym.set(word)
  }

  let options = [
    { label: "Αποθήκευση", icon: MdStarBorder, onClick: favourite },
    { label: "Συνώνυμα", icon: MdInfoOutline, onClick: viewSynonyms },
  ]

  export let isOpen, toggleIsOpen 
  export let word
</script>

<Dropdown {isOpen} {toggleIsOpen} width={150}>
  <div class="options__container">
    <IconButton
      label="Δες Ορισμό"
      href={`https://el.wiktionary.org/wiki/${word}`}
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
