<script>
    
    export let item;

    function editItem() {
		console.log("editing")
	}

    function deleteItem(id) {
        console.log("Deleted");
    }

</script>

<svelte:head>
	<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"/>
	<script src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
</svelte:head>

<article class="media">
    
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{item.tag}</strong> <small>@johnsmith</small> <small>31m</small>
          <br>
          {item.description}
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a class="level-item" href="">
            <span class="icon is-small"><i class="fas fa-reply"></i></span>
          </a>
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a class="level-item" href="">
            <span class="icon is-small"><i class="fas fa-flag"></i></span>
          </a>
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a class="level-item" href="">
            <span class="icon is-small"><i class="fas fa-pen"></i></span>
          </a>
        </div>
      </nav>
    </div>
    <div class="media-right">
      <button class="delete"></button>
    </div>
  </article>