<script>
    import {
        setcart
    } from "$lib/data/setcart.js";

    export let product

    const addToCart = (product) => {
        for (let item of $setcart) {
            if (item.id === product.id) {
                product.quantity += 1
                $setcart = $setcart;
                return;
            }
        }
        $setcart = [...$setcart, product]
    }

    const plusItem = (product) => {
        for (let item of $setcart) {
            if (item.id === product.id) {
                product.quantity += 1
                $setcart = $setcart;
                return;
            }
        }
    }

    const minusItem = (product) => {
        for (let item of $setcart) {
            if (item.id === product.id) {
                if (product.quantity > 1) {
                    product.quantity -= 1
                    $setcart = $setcart
                } else {
                    $setcart = $setcart.filter((cartItem) => cartItem != product)
                }
                return;
            }
        }
    }

    let count = product.contents;
    let kss = 0;
    let ings = "";

    for (let i = 0; i < count.length; i++) {
        if(count[i].obsah != 0){
            if(i === 0) {
                kss += count[i].ks;
                ings += `${count[i].obsah}`;
            } else {
                kss += count[i].ks;
                ings += `, ${count[i].obsah}`;
            }
            
        }   
    }

</script>


<div class="w-full text-white leading-tight flex flex-col space-y-6 justify-between border-b p-4">
    <div class="flex-1  group rounded-md">
        <div class="header mb-4 group ">
            <h1 class="title">{product.title}</h1>
            <h1 class="opacity-50">({kss} ks)</h1>
        </div>
        <div class="parts mb-4 ">
            {#each product.contents as content}
                {#if content.produkt}
                    <div class="flex space-x-2">
                        <p>{content.ks}ks</p>
                        <div>
                            <p>{content.produkt}</p>
                            
                        </div>
                        
                    </div>
                {/if}
            {/each} 
            <p class="opacity-50 mt-4">({ings})</p>
        </div>
        
    </div>
    <div class="w-full z-50 base  text-white leading-tight flex justify-end">
        {#if $setcart.includes(product)}
            {#each $setcart as item }
                    {#if item.id == product.id}
                        <div class="flex actionbar justify-end space-x-2 text-right whitespace-nowrap opacity-50 w-1/6">
                            <button on:click={() => minusItem(item)}>-</button>
                            <p>{item.quantity} </p>
                            <button on:click={() => plusItem(item)}>+</button>
                        </div>
                    {/if}
            {/each}
        {:else}
            <div class="flex actionbar space-x-2 text-right justify-end whitespace-nowrap opacity-50 w-1/6">
                <button>-</button>
                <p>0</p>
                <button on:click={() => addToCart(product)}>+</button>
            </div>
        {/if}
            
            <div class="flex justify-end actionbar space-x-2 text-right whitespace-nowrap opacity-50 w-1/6">
                <p>{product.price} Kč</p>
            </div>

    </div>
</div>

<style>
    button {
        @apply opacity-50;
    }
</style>