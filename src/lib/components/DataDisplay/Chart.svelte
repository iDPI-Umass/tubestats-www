<script>
    import Chart from 'chart.js/auto';
    import { onDestroy, onMount } from "svelte";
    import { sourceStore } from "$lib/stores/source.js";
    import { getOptions } from "./options.js";

    export let name;

    let canvas, chart;
    let unsubscribeSource;

    onMount(() => {
        unsubscribeSource = sourceStore.subscribe( function ( source ) {
            if ( source == null ) {
                return;
            }

            if ( chart != null ) {
                chart.destroy();
            }

            const options = getOptions( source, name );
            chart = new Chart( canvas, options );
        });
    });

    onDestroy(() => {
        unsubscribeSource();
    });
</script>


<canvas
        bind:this={canvas}>
</canvas>


<style>
</style>