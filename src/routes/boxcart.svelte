<script>
  import { boxes } from "$lib/data/boxes.js";
  import CartTileBox from "$lib/components/cart/CartTileBox.svelte";
  import CartTileBoxMobile from "$lib/components/cart/CartTileBoxMobile.svelte";
</script>

<div class="flex space-x-8 p-4 flex-1 base">
  {#each $boxes as product}
       <CartTileBox product={product} />
  {/each}
</div>

<div class="flex-1 phone pb-[5.5rem]">
    {#each $boxes as product}
         <CartTileBoxMobile product={product} />
    {/each}
  </div>