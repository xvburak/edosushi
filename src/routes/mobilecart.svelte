<script>
  import { boxes } from "$lib/data/boxes.js";
  import { sets } from "$lib/data/sets.js";
  import { cart } from "$lib/data/cart.js";
  import CartTileBox from "$lib/components/cart/CartTileBox.svelte";

  const addToCart = (product) => {
        for (let item of $cart) {
            if (item.id === product.id) {
                product.quantity += 1
                $cart = $cart;
                return;
            }
        }
        $cart = [...$cart, product]
        console.log($cart)
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

<div class="md:flex md:space-x-8  md:p-4 flex-1 mb-[5.5rem]">
    <div class="bg-yellow text-center h-8 sticky top-12 z-20 justify-center py-1 text-white">
        <h2>Boxy</h2>
    </div>
  {#each $boxes as product}
       <CartTileBox product={product} />
  {/each}
  <div class="bg-yellow text-center h-8 sticky top-12 z-20 justify-center py-1 text-white">
    <h2>Sety</h2>
</div>
  {#each $sets as product}
       <CartTileBox product={product} />
  {/each}
</div>
