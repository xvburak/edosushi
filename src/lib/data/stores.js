import { writable, readable } from 'svelte/store';

export const dage = writable([]);
export const methods = readable(['Hotovost na místě', 'Platba kartou na místě', 'Platba převodem'])

const whatDays = async () => {
    const event = new Date();
    const todaysNumber = event.getDay();
    const options = { weekday: 'long' };
    
    const den = event.toLocaleDateString('cs-CS', options)

    const weekdays = ['Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek']

    if (todaysNumber > 4) {
        dage.set(weekdays)
    } else {
        dage.set(weekdays.slice(todaysNumber))
    }    
};

whatDays();