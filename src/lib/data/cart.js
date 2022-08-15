import {
    readable,
    writable,
    derived
} from "svelte/store";

import { boxcart } from "$lib/data/boxcart.js";
import { setcart } from "$lib/data/setcart.js";

export const products = readable([])

export const cart = readable([])