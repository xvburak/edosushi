<script>
  import { sets } from "$lib/data/sets.js";
  import CartTileSet from "$lib/components/cart/CartTileSet.svelte";
  import CartTileSetMobile from "$lib/components/cart/CartTileSetMobile.svelte";
</script>

<div class="flex base space-x-8 p-4 flex-1 ">
  {#each $sets as product}
       <CartTileSet product={product} />
  {/each}
</div>

<div class="flex-1 phone pb-[5.5rem]">
    {#each $sets as product}
         <CartTileSetMobile product={product} />
    {/each}
</div>