import { writable } from 'svelte/store';

export const sets = writable([]);

const fetchSet = async () => {
    const url = `https://script.google.com/macros/s/AKfycbyj9BFlvlP2Gm7BMxoYcZJQX0qgWQAwNfHfOV24a2xq2AVtKXOmIoL21QefoPHEhSxN/exec`;
    const res = await fetch(url);
    const data = await res.json();
    
    const loadedSet = data.map((data, index) => {
        return {
            title: data.title,
            id: `set${index}`,
            quantity: 1,
            price: data.price,
            contents: data.contents
        };
        
    });

    sets.set(loadedSet);
};
fetchSet();