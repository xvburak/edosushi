import { writable } from 'svelte/store';

export const sets = writable([]);

const fetchSet = async () => {
    const url = `https://script.googleusercontent.com/macros/echo?user_content_key=qx36zNK9B5XiB31_IeUqt8sPX6qAgiLeZeQnUwJp80HO4OWmMCQZ9KUtHx_IrlplmjhPROCr5giOYj9rm2Kd76v1XuINADDbm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMtds_iW9epzqROGmjlTY8azaNS-U9NXb6u198gxYJBAnv1Rt0Sf0xrPogfnKUlna-0dp2St8x-WrW4f5bwWivQPL5iwbybpow&lib=M6XtDPyep9ADEDr0ym513Xvw-lhh3mvzt`;
    const res = await fetch(url);
    const data = await res.json();
    
    const loadedSet = data.map((data, index) => {
        return {
            title: data.title,
            id: data.id,
            quantity: 1,
            price: data.price,
            contents: data.contents
        };
        
    });

    sets.set(loadedSet);
};
fetchSet();