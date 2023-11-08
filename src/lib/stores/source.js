import { writable, get } from "svelte/store";
import { getSampleData } from "$lib/resources/data.js";

const createStore = function () {
    let source = null;

    const store = writable( source );
    const { subscribe, update } = store;

    return {
        subscribe,
        push: async function ( name ) {
            const current = get( store )
            if ( name === current?.name ) {
                return;
            }

            const data = await getSampleData( name );
            console.log(data);
            update( function () {
                return { name, data };
            });
        }
    };
};

export const sourceStore = createStore();
