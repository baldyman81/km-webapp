<script>
	import { slide } from "svelte/transition";
	import { elasticInOut } from "svelte/easing";
	import { itemsFromStore } from "./itemstore.js";
  
	let items = itemsFromStore;
	let input = "";
  
	function addItem() {
	  if (input)
		items = [
		  ...items,
		  {
			text: input,
			id: Math.random()
			  .toString(36)
			  .substr(2, 9)
		  }
		];
	  input = "";
	}

	function editItem() {
		console.log("editing")
	}
  
	function removeItem(id) {
	  const index = items.findIndex(item => item.id === id);
	  items.splice(index, 1);
	  items = items;
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
		  </div>
		</form>
		<ul class:list={items.length > 0}>
		  {#each items as item (item.id)}
			<li class="list-item" transition:slide="{{duration: 300, easing: elasticInOut}}">
			  <div class="is-flex" style="align-items: center">
				<span class="is-pulled-left">{item.name}</span>
				<div style="flex: 1"></div>
				<button class="button is-text is-pulled-right is-small" on:click={()=> editItem(item.id)}>
					<span class="icon">
					  <i class="fas fa-pen"></i>
					</span>
				  </button>
				<button class="button is-text is-pulled-right is-small" on:click={()=> removeItem(item.id)}>
				  <span class="icon">
					<i class="fas fa-check"></i>
				  </span>
				</button>
			  </div>
			</li>
		  {:else}
			<li class="has-text-centered" transition:slide="{{delay: 600, duration: 300, easing: elasticInOut}}">Nothing here!</li>
		  {/each}
		</ul>
	  </div>
	</div>
  </main>