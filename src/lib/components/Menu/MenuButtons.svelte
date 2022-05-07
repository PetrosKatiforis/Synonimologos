<script>
  import MenuButton from "$lib/components/Menu/MenuButton.svelte" 
</script>

<div class="menu__buttons">
  <MenuButton label="Πώς Δημιουργήθηκε">
    <p>Η ιστοσελίδα δημιουργήθηκε χρησιμοποιώντας την Svelte.js</p>
    
    <p>Ο κώδικας είναι δημοσίως διαθέσιμος 
      <a target="_blank" href="https://github.com/Petros-K/Synonimologos">εδώ</a>
    </p>
  </MenuButton>

  <MenuButton label="Επικοινωνία">
    <p>
      Για οποιαδήποτε ερώτηση μπορείτε να επικοινωνήσετε
      μέσω email εδώ: pkatif@mail.com
    </p>
  </MenuButton>
</div>

<style>
  .menu__buttons {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1em;
  }

  @media (max-width: 30em) {
    .menu__buttons {
      gap: 0.5em;
    }
  }
</style>
