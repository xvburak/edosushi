<script>
  import { boxes } from "$lib/data/boxes.js";
  import CartTileBox from "$lib/components/cart/CartTileBox.svelte";
  import CartTileBoxMobile from "$lib/components/cart/CartTileBoxMobile.svelte";
</script>

<div class=" base pb-24">
  {#each $boxes as product}
       <CartTileBox product={product} />
  {/each}
</div>

<div class="flex-1 phone pb-[5.5rem]">
    {#each $boxes as product}
         <CartTileBoxMobile product={product} />
    {/each}
  </div>