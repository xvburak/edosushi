import {readable, writable} from "svelte/store";

export const address = writable({
    name: "",
    email: "",
    phone: "",
    adresa: "",
    pay: "",
    day: ""
})