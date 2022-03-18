<script>
  import { createEventDispatcher, tick } from "svelte";
  const dispatch = createEventDispatcher();
  let isEditMode = false;
  let isSetToPublish;
  let description;
  let textareaEl;
  export let item;

  async function editItem(id) {
    isEditMode = true;
    description = item.description;
		console.log("Editing...");
    await tick()
    textareaEl && textareaEl.focus()
	}

  function saveItem(id) {
    console.log("Item saved");
    item.description = description;
    isEditMode = false;
  }
  
	function publishItem(id) {
	  if (item.publish == true) {
      item.publish = false;
    } else item.publish = true;
    isSetToPublish = item.publish;
    console.log(item.publish);
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
        {#if isEditMode}
        <textarea class="textarea"
          bind:value={description}
          bind:this={textareaEl}></textarea>
        {:else}
        
        <p>
          <strong>{item.tag}</strong> <small>@johnsmith</small> <small>31m</small>
          <br>
          {item.description}
        </p>
        {/if}
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <p class="buttons">
            {#if item.publish}
            <button class="button is-small" on:click={publishItem(item.id)}>
              <span class="icon is-small">
                <i class="fas fa-bullhorn"></i>
              </span>
              <span>Unpublish</span>
            </button>
            {:else}
            <button class="button is-small" on:click={publishItem(item.id)}>
              <span class="icon is-small">
                <i class="fas fa-bullhorn"></i>
              </span>
              <span>Publish</span>
            </button>
            {/if}
            {#if isEditMode}
            <button class="button is-small" on:click={saveItem(item.id)}>
              <span class="icon is-small">
                <i class="fas fa-save"></i>
              </span>
              <span>Save</span>
            </button>
            {:else}
            <button class="button is-small" on:click={editItem(item.id)}>
              <span class="icon is-small">
                <i class="fas fa-pen"></i>
              </span>
              <span>Edit</span>
            </button>
            {/if}
            
            <button class="button is-small">
              <span class="icon is-small">
                <i class="fas fa-comment"></i>
              </span>
              <span>Feedback</span>
            </button>
          </p>
        </div>
      </nav>
    </div>
    <div class="media-right">
      <button class="delete"></button>
    </div>
  </article>

