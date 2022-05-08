<script>
  import { notifications } from "$lib/stores/notificationStore.js"

  import Notification from "$lib/components/Notification.svelte"
</script>

<div
  class:busy={$notifications.length > 0}
>
  {#each $notifications as notification}
    <Notification {notification} />
  {/each}
</div>

<style>
  div {
    position: fixed;
    pointer-events: none;
    z-index: 999999;

    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1em;

    width: 100vw;
    padding: 1em var(--padding-x);

    padding-bottom: 20em;

    background: linear-gradient(to bottom, black, transparent);
    opacity: 0%;

    transition: opacity 200ms;
  }

  div.busy {
    opacity: 100%;
  }
</style>
