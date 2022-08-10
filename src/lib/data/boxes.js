import { writable } from 'svelte/store';

export const boxes = writable([]);

const fetchBox = async () => {
    const url = `https://script.googleusercontent.com/macros/echo?user_content_key=Uw9eUngVDOH98t0tlVC_9uO3VbSdO8V2ner9peBcGwNZnOMCaxhQYUi0vNYN49EFFClXj-H67ow2aJfEVcW7ZM2fj_QB6SCum5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCapn4Jmcu_Ppf4Uhxj0LvGfX2anIqQ0qg2kaIkNU8QHIBONa-aeYFPKjw6qeNq5M_AnbJe6exRYXLV_AvlewU_rItdUByYMBw&lib=M6XtDPyep9ADEDr0ym513Xvw-lhh3mvzt`;
    const res = await fetch(url);
    const data = await res.json();
    
    const loadedBox = data.map((data, index) => {
        return {
            title: data.title,
            id: data.id,
            quantity: 1,
            price: data.price,
            contents: data.contents
        };
        
    });

    boxes.set(loadedBox);
};
fetchBox();