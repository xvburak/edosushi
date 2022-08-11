<script>
    import {
        cart
    } from "$lib/data/cart.js";

    export let product

    const addToCart = (product) => {
        for (let item of $cart) {
            if (item.id === product.id) {
                product.quantity += 1
                $cart = $cart;
                return;
            }
        }
        $cart = [...$cart, product]
    }

    const plusItem = (product) => {
        for (let item of $cart) {
            if (item.id === product.id) {
                product.quantity += 1
                $cart = $cart;
                return;
            }
        }
    }

    const minusItem = (product) => {
        for (let item of $cart) {
            if (item.id === product.id) {
                if (product.quantity > 1) {
                    product.quantity -= 1
                    $cart = $cart
                } else {
                    $cart = $cart.filter((cartItem) => cartItem != product)
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


<div class="w-full text-white  leading-tight flex flex-col space-y-6 justify-between border-b p-4 md:border-none md:p-0">
    <div class="flex-1  group rounded-md">

        <div class="header mb-4 group">
            <h1 class="title">{product.title}</h1>
        </div>

        <div class="parts mb-4">
            {#each product.contents as content}
                {#if content.produkt}
                    <div class="flex space-x-2">
                        <p>{content.ks}ks</p>
                        <div>
                            <p>{content.produkt}</p>
                            <p class="opacity-50">({content.obsah})</p>
                        </div>
                        
                    </div>
                {/if}
            {/each} 
        </div>
        
    </div>
    <div class="flex justify-between">
        {#if $cart.includes(product)}
            {#each $cart as item }
                {#if item.id == product.id}
                    <div class="flex actionbar space-x-2">
                        <button on:click={() => minusItem(item)}>-</button>
                        <p>{item.quantity} </p>
                        <button on:click={() => plusItem(item)}>+</button>
                    </div>
                {/if}
            {/each}
        {:else}
            <div class="flex actionbar space-x-2">
                <button>-</button>
                <p>0</p>
                <button on:click={() => addToCart(product)}>+</button>
            </div>
        {/if}
            
            <div class="flex actionbar space-x-2">
                <p>{product.price} Kč</p>
            </div>

    </div>
</div>

<style>
    button {
        @apply opacity-50;
    }
</style>