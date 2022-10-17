<script>
    import { cart } from "$lib/data/cart.js";

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
    export let product
</script>


    {#if $cart.includes(product)}
     <p>hello</p> 
    {:else}
        <button class="w-full border-t border-gray bg-white p-4 py-6 leading-tight flex justify-between" on:click={() => addToCart(product)}>
            <p class="actionbar  whitespace-nowrap truncate">
                <span>+</span> Přidat {product.title}
            </p>
        </button>
    {/if}