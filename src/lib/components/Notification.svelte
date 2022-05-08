<script>
  import { onMount } from "svelte"
  import { fly } from "svelte/transition"

  import { notifications } from "$lib/stores/notificationStore.js"

  export let notification

  function deleteNotification() {
    notifications.update(notifications => 
      [...notifications.filter(item => item.title !== notification.title)]
    )
  }

  // Deleting the notification once the timer is over
  onMount(() => {
      setTimeout(() => {
        deleteNotification()

      }, notification.duration)
  })
</script>

{#key notification.title}
  <div
    class="notification"
    on:click={deleteNotification}
    transition:fly={{ y: -100, duration: 200 }}
  >
    <div class="info">
      <h1>{ notification.title }</h1> 
      <p>{ notification.message }</p>
    </div>

    <div>
      <div 
        class="progress"
        style="--duration: {notification.duration}ms"
      >
      </div>
    </div>
  </div>
{/key}

<style>
  .notification {
    background: var(--bg-lighter);
    max-width: 300px;

    pointer-events: all;
    border: 1px solid var(--bg-border);
    border-radius: var(--radius);

    cursor: pointer;
  }

  .info {
    padding: 0.5em;
  }

  h1 {
    font-size: 1rem;
  }

  p {
    font-size: 0.8rem;
    margin-top: 0.5em;

    margin-bottom: 0.5em;
  }

  @keyframes progress {
    0% { width: 0 }
    100% { width: 100% }
  }

  .progress {
    background-color: white;
    height: 3px;

    animation: progress linear var(--duration);
  }
</style>
