<script>
    import {sourceStore} from "$lib/stores/source.js";
    import {onDestroy} from "svelte";
    let unsubscribeSource;
    let collectionDate, size, queries, verifiedHits, deadLinks;

    unsubscribeSource = sourceStore.subscribe((source) => {
        if (source != null) {
            let sampleData = source.data.sample;
            collectionDate = sampleData['collection_date'];
            size = sampleData['size'];
            queries = sampleData['queries'];
            verifiedHits = sampleData['verified_hits'];


        }
    });
    onDestroy(() => {
        unsubscribeSource();
    });
</script>

<section>
    <div class="sample-info-container">
        <div class="sample-info">
            <h1>Sample Date</h1>
            <p>{collectionDate ? collectionDate : "..."}</p>
        </div>
        <div class="sample-info">
            <h1>Estimated Size of YouTube</h1>
            <p>{size ? size.toLocaleString()+" videos": "..."}</p>
        </div>
        <div class="sample-info">
            <h1>Random YouTube Videos Sampled</h1>
            <p>{verifiedHits ? verifiedHits.toLocaleString()+" videos" : "..."}</p>
        </div>
    </div>
</section>

<style>
    section {
        background-color: #589ef7;
    }
    section div.sample-info-container{
        position: relative;
        flex: 1 1 auto;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: flex-start;
    }
    div.sample-info {
        flex: 1 1 25%;
        padding: 1rem;
    }
</style>

