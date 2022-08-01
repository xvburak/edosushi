import {readable, writable} from "svelte/store";

export const address = writable({
    name: "",
    phone: "",
    adresa: "",
    email: "",
})