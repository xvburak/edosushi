import { writable } from 'svelte/store';

export const boxes = writable([]);

const fetchBox = async () => {
    const url = `https://script.googleusercontent.com/macros/echo?user_content_key=n6ruHncyf1IaRRZHtmo3qP0tIzMFgtHZeV8Nr7m2AjiV12YRgPACGYEhjaATyJMsi6DlbUN1tsktIxjuwSBiR20IukOjL5XWm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnM7M5fms0FvOV4pXXm_TJf9raJdCon9tIjK9iYDx-JKn1RXFUENKMbv6ZnEHKfYSCH-nwGCq8rLBi2DoYBhL1KVPD4Nw7J2pIA&lib=M6XtDPyep9ADEDr0ym513Xvw-lhh3mvzt`;
    const res = await fetch(url);
    const data = await res.json();
    
    const loadedBox = data.map((data, index) => {
        return {
            title: data.title,
            id: `box${index}`,
            quantity: 1,
            price: data.price,
            contents: data.contents
        };
        
    });


    boxes.set(loadedBox);
};
fetchBox();