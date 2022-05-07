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
    user-select: none;

    margin-top: 1em;
    width: auto;
    white-space: nowrap;
    

    overflow-x: auto;
    overflow-y: hidden;
  }

  @media (min-width: 30em) {
    .tabs__container {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 0.5em;

      margin: 0 auto;
      margin-top: 1em;

      max-width: 750px;
      flex-wrap: wrap;
    }

    .tabs__container .tab {
      display: block;
      margin: 0;
    }
  }

  .tab:first-child {
    margin-left: 1em;
  }

  .tab {
    display: inline-block;
    margin-right: 1em;

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
