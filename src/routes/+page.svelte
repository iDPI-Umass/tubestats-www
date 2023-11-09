<script>
  import { onMount } from 'svelte';
  import {optionsStore, selectedOption, selectedOptionFile} from "$lib/stores/sample-options.js";
  import {sourceStore} from "$lib/stores/source.js";
  import DataDisplay from "$lib/components/DataDisplay/DataDisplay.svelte";
  import ModelExplorer from "$lib/components/ModelExplorer.svelte";
  import { getDataIndex } from "$lib/resources/data.js"
  import SampleSelector from "$lib/components/SampleSelector.svelte";
  import SampleSummary from "$lib/components/SampleSummary.svelte";

  let topsection, bottomsection;
  let selected;



  onMount(async function() {
    const response = await getDataIndex();
    // console.log(response)
    await optionsStore.set(response);
    // console.log($optionsStore);
    // console.log(Object.keys($optionsStore)[0]);
    await sourceStore.push(Object.keys($optionsStore)[0]);  // push default value into sourceStore, load sample data
  })
</script>
<main>

  <section bind:this={topsection} class="topsection">
    <SampleSummary></SampleSummary>
    <DataDisplay></DataDisplay>
  </section>
  <section bind:this={bottomsection} class="bottomsection">
    <ModelExplorer></ModelExplorer>
  </section>
</main>


<style>
  main {
    touch-action: none;
    position: relative;
    flex: 1 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
    /*padding: 0.5rem;*/
    height: calc( 100dvh - 6rem);
  }

  main .topsection {
    display: flex;
    flex-direction: column;
    /*padding: 1rem;*/
    flex: 1 1 75%;
    overflow-y: scroll;
  }

  main .bottomsection {
    padding: 1rem;
    flex: 1 1 25%;
    overflow-y: scroll;
    background-color:#f1b844
  }
</style>