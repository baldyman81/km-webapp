<script>
	import Tabs from "./components/tabs.svelte";
	import { itemsFromStore, itemsFiltered, publishedItemsFromStore } from "./itemstore.js";
	import ItemCard from "../src/components/ItemCard.svelte";
	import FlaggedCards from "./components/FlaggedCards.svelte";
	import PublishedItems from "./components/PublishedItems.svelte";

	let tabItems = [
		{ label: "Briefs", value: 1 },
		{ label: "Flagged for Publication", value: 2 },
		{ label: "Published", value: 3 }
	];
	let currentTab;
	let items = itemsFromStore;
	let input = "";
	let itemsF = itemsFiltered;
	let publications = publishedItemsFromStore;


	function addItem() {
	  if (input)
		items = [
		  ...items,
		  {
			description: input,
			id: Math.random()
			  .toString(36)
			  .substr(2, 9)
		  }
		];
	  input = "";
	}

  function publishItems() {
	array.forEach(element => {
		
	});
	
  }
	
  </script>
  
  <svelte:head>
	<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"/>
	<script src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
  </svelte:head>


  <main class="container is-fluid">
	<div class="columns is-centered is-vcentered is-mobile">
	  <div class="column is-narrow" style="width: 70%">
		<h1 class="has-text-centered title">Brief</h1>
		<form class="field has-addons" style="justify-content: center" on:submit|preventDefault={addItem}>
		  <div class="control">
			<input bind:value={input} class="input" type="text" placeholder="Enter new brief...">
		  </div>
		  <div class="control">
			<button class="button is-primary">
			  <span class="icon is-small">
				<i class="fas fa-plus"></i>
			  </span>
			</button>
			{#if 2 === currentTab}
			<button class="button" on:click={publishItems}>
				<span class="icon is-small">
				<i class="fas fa-bullhorn"></i>
				</span>
			</button>
			  {/if}
		  </div>
		</form>
		<Tabs bind:activeTabValue={currentTab} tabItems={tabItems} />

		<code class="language-text"></code>
		
		{#if 1 === currentTab}
		  
			<div class="list-container">
				{#each items as item (item.id)}
				<ItemCard item={item}/>
				
				{/each}
			</div>
		{/if}
		
		{#if 2 === currentTab}
			
			<div class="list-container">
				{#each itemsF as item (item.id)}
				<ItemCard item={item}/>
				{/each}
			</div>
		{/if}
		
		{#if 3 === currentTab}

			<div class="list-container">
				{#each publications as publication (publication.id)}
				<PublishedItems publication={publication}/>
				{/each}
			</div>
		{/if}
		
	  </div>
	</div>
  </main>