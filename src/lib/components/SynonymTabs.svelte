<script>
  export let tabs 

  // Use the first object key as a default
  export let selectedKey
</script>

<div class="tabs__container">

  {#each tabs as key, index}
    <div 
      class="tab"
      class:selected={selectedKey == key}

      on:click={() => { selectedKey = key }}
    >
    
      <p>
        <span>Όπως λέμε</span> 
        «{ key }»
      </p>
    </div>
  {/each}
</div>

<style>
  .tabs__container {
    margin: 0 auto;
    user-select: none;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-wrap: wrap;
    margin-top: 1em;
    gap: 0.5em;

    max-width: 750px;
  }

  .tab {
    background: var(--bg-lighter);
    padding: 0.5em 0.7em;

    border-radius: var(--radius);
    white-space: nowrap;

    font-size: 0.8rem;
    
    cursor: pointer;
    opacity: 30%;

    transition: opacity 150ms;
  }

  .tab.selected {
    opacity: 100%;
  }
</style>
