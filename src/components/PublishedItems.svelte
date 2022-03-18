<script>
    
    export let publication;
</script>


<article class="media">
    <div class="media-content">
        <div class="content">
            
                <strong>{publication.tag}</strong> 
                <ul>
                    <li>{publication.description1}</li>
                    <li>{publication.description2}</li>
                    <li>{publication.description3}</li>
                    <li>{publication.description4}</li>
                    <li>{publication.description5}</li>
                </ul>
               
                <strong>{publication.tagNeg}</strong>
                <ul>
                    <li>{publication.negDescription1}</li>
                    <li>{publication.negDescription2}</li>
                </ul>
                <strong>{publication.tagRec}</strong>
                <ul>
                    <li>{publication.recDescription1}</li>
                    <li>{publication.recDescription2}</li>
                </ul>
              
        </div>
    </div>
</article>