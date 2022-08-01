import {
    readable,
    writable
} from "svelte/store";

export const products = readable([{
        id: 1,
        title: "Family Set",
        q: 43,
        price: 860,
        quantity: 1,
        contents: [{
                title: "hoso maki",
                q: 18
            },
            {
                title: "uramaki a futomaki",
                q: 16
            },
            {
                title: "nigiri",
                q: 9
            }
        ]
    },
    {
        id: 2,
        q: 69,
        title: "Party Set",
        price: 1360,
        quantity: 1,
        contents: [{
                title: "hoso maki",
                q: 30
            },
            {
                title: "uramaki a futomaki",
                q: 24
            },
            {
                title: "nigiri",
                q: 15
            }
        ]
    }
])

export const cart = writable([])
