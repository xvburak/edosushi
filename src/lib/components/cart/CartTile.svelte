<script>
import { writable } from 'svelte/store';
import { fullCount } from '$lib/data/stores.js';

export const count = writable(0);

function increment() {
		count.update(n => n + 1);
        fullCount.update(n => n + 1);
	}

function decrement() {
		count.update(n => n - 1);
        fullCount.update(n => n - 1);
	}

let countValue;

	count.subscribe(value => {
		countValue = value;
	});

</script>


<div class="w-full text-white  leading-tight flex flex-col space-y-6 justify-between">
    <div class="flex-1 hover:bg-white group rounded-md">
        <div class="header mb-4 group group-hover:hidden">
            <h1 class="title">
                <slot name="title">Set Name</slot>
            </h1>
            <p class="quantity opacity-50">
                <slot name="quantity">(43 ks)</slot>
            </p>
        </div>
        <div class="parts mb-4 group-hover:hidden">
            <p>00 ks product name</p>
            <p>00 ks product name</p>
            <p>00 ks product name</p>  
        </div>
    
        <p class="content opacity-50 group-hover:hidden">
            <slot name="content">(losos, krevety, bílá ryba nebo tuňák, masago kaviár, avokádo, veg rolky, speciální rolky)</slot>
        </p>
    </div>
    <div class="flex justify-between">
        <div class="flex actionbar space-x-2">     
            <button on:click={decrement}>-</button>
                <p>{countValue}</p>
            <button on:click={increment}>+</button>
        </div>
        <div class="flex actionbar space-x-2">
            <p>0 Kč</p>
        </div>
    </div>

</div>


<style>
    button {
        @apply opacity-50;
    }
</style>