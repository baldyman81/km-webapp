<script>
    import { onMount } from "svelte";

    export let tabItems = [];
    export let activeTabValue;

  onMount(() => {
    // Set default tab value
    if (Array.isArray(tabItems) && tabItems.length && tabItems[0].value) {
      activeTabValue = tabItems[0].value;
    }
  });

  const handleClick = tabValue => () => (activeTabValue = tabValue);

</script>

<ul>
    {#if Array.isArray(tabItems)}
      {#each tabItems as tabItem}
        <li class={activeTabValue === tabItem.value ? 'active' : ''}>
          <span on:click={handleClick(tabItem.value)}>{tabItem.label}</span>
        </li>
      {/each}
    {/if}
  </ul>

  <style>
    ul {
      display: flex;
      flex-wrap: wrap;
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;
      border-bottom: 1px solid #dee2e6;
    }
  
    span {
      border: 1px solid transparent;
      border-top-left-radius: 0.25rem;
      border-top-right-radius: 0.25rem;
      display: block;
      padding: 0.5rem 1rem;
      cursor: pointer;
    }
  
    span:hover {
      border-color: #e9ecef #e9ecef #dee2e6;
    }
  
    li.active > span {
      color: #495057;
      background-color: #fff;
      border-color: #dee2e6 #dee2e6 #fff;
    }
  </style>