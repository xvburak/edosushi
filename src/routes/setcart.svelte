<script>
  import { sets } from "$lib/data/sets.js";
  import { cart } from "$lib/data/cart.js";
  import CartTileSet from "$lib/components/cart/CartTileSet.svelte";

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

<div class="flex space-x-8 p-4 flex-1 ">
  {#each $sets as product}
       <CartTileSet product={product} />
  {/each}
</div>
