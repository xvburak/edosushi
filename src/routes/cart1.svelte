<script>
    import CartTile from "$lib/components/cart/CartTile.svelte";
    import { products, cart } from "$lib/data/cart.js";

</script>

<div class="flex space-x-8 p-4 flex-1 ">
   {#each $products as product}
        <CartTile product={product} />
   {/each}
</div>
