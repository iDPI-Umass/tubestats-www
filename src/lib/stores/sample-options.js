import { writable, derived } from 'svelte/store';
export const optionsStore = writable([]);
export const selectedOption = writable([]);

export const selectedOptionFile = derived([selectedOption, optionsStore], ([$selectedOption, $optionsStore]) => {
    return $optionsStore[$selectedOption];
});