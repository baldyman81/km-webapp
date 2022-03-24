<script>
    
    export let publication;
    
</script>


<article class="media">
    <div class="media-content">
        <div class="content">
        
            {#if publication.tag == "Positive"}
                <strong>Positive</strong> 
                <ul>{#each publication.items as dotPoints}
                    <li>{dotPoints}</li>
                    {/each}
                </ul>
            {:else if publication.tag == "Negative"}
                <strong>Negative</strong> 
                <ul>
                    {#each publication.items as dotPoints}
                    <li>{dotPoints}</li>
                    {/each}
                </ul>
            {:else if publication.tag == "Recognition"}
                <strong>Recognition</strong> 
                <ul>
                    {#each publication.items as dotPoints}
                    <li>{dotPoints}</li>
                    {/each}
                </ul>
            {/if}
            
        </div>
    </div>
</article>