<script>
    import "@shoelace-style/shoelace/dist/components/select/select.js";
    import "@shoelace-style/shoelace/dist/components/option/option.js";
    import {onDestroy, onMount} from "svelte";
    import {sourceStore} from "$lib/stores/source.js";
    import {optionsStore} from "$lib/stores/sample-options.js";

    let select;
    let unsubscribeSource;

    let currentMonth = Object.keys($optionsStore)[0];
    onMount(() => {
        unsubscribeSource = sourceStore.subscribe( function ( source ) {
            if (source == null) {
                return;
            }
            currentMonth = source.name;
        });
        select.addEventListener( "sl-change", function (event) {
            sourceStore.push(event.target.value)
        });
    });
    onDestroy(() => {
        unsubscribeSource();
    });
</script>

<div>
    <sl-select bind:this={select} value={currentMonth}>
        {#each Object.keys($optionsStore) as option (option)}
            <sl-option value="{option}">
                {option}
            </sl-option>
        {/each}
    </sl-select>
</div>

<style>
    sl-select {
        width: 100%;
        padding: 1rem;
        vertical-align: middle
    }
</style>