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

</script>



<div class="w-full text-white  leading-tight flex flex-col space-y-6 justify-between">
    <div class="flex-1 hover:bg-white group rounded-md">
        <div class="header mb-4 group group-hover:hidden">
            <h1 class="title">{product.title}</h1>
            <p class="quantity opacity-50">({('0' + product.q).slice(-2)} ks)</p>
        </div>
        <div class="parts mb-4 group-hover:hidden">
            {#each product.contents as content}
            <div class="flex">
                <p>{('0' + content.q).slice(-2)} ks &nbsp;</p>
                <p>{content.title}</p>
            </div>
            {/each} 
        </div>
    
        <p class="content opacity-50 group-hover:hidden">
            <slot name="content">(losos, krevety, bílá ryba nebo tuňák, masago kaviár, avokádo, veg rolky, speciální rolky)</slot>
        </p>
        
    </div>
    <div class="flex justify-between">
        {#if $cart.includes(product)}
            {#each $cart as item }
                {#if item.id == product.id}
                    <div class="flex actionbar space-x-2">
                        <button on:click={() => minusItem(item)}>-</button>
                        <p>{item.quantity}</p>
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