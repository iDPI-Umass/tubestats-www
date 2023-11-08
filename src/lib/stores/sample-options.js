import { writable, derived } from 'svelte/store';
import * as Data from "$lib/resources/data.js";
export const optionsStore = writable([]);
export const selectedOption = writable([]);

export const selectedOptionFile = derived([selectedOption, optionsStore], ([$selectedOption, $optionsStore]) => {
    return $optionsStore[$selectedOption];
});

export const sampleData = derived(selectedOptionFile, async ($selectedOptionFile) => {
    if ($selectedOptionFile == null) {
        return;
    }
    const data = await Data.getSampleData($selectedOptionFile);
    if (data == null ) {
        return;
    }
    console.log(data);
    return data;
});