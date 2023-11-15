import {optionsStore} from "$lib/stores/sample-options.js";
import {get} from "svelte/store";

//const baseURL = "http://localhost:5173/data";
const baseURL = "https://tubestats.org/data";

const getJSON = async function ( name ) {
    const url = `${ baseURL }/${ name }`;
    const options = {
        method: "GET",
        mode: "cors",
        redirect: "follow",
        headers: {
            Accept: "application/json"
        }
    };
    const response = await fetch( url, options );
    if ( response.status === 200 ) {
        return await response.json();
    }
    if ( response.status === 404 ) {
        console.warn( `JSON file ${ name } not found` );
        return null;
    }
    throw new Error( `Unexpected response status ${ response.status }` );
};

const getDataIndex = async function () {
    return await getJSON('index.json');
}

const getSampleData = async function ( date ) {
    let opts = get(optionsStore);
    const file = opts[date];
    return await getJSON( file );
};

export {
    getDataIndex, getSampleData
}