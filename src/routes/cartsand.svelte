<script>
    import {
        itemsInCart,
        totalPrice,
        cartContents
    } from '$lib/data/stores.js';

    import Item from '$lib/components/test/Item.svelte';

    let inventory = ['apples', 'leeks', 'flour', 'potatoes', 'berries'];
</script>

<main>
    <div class = "items">
      {#each inventory as item}
        <Item item={item}/>
      {/each}
    </div>
  
    <p>There are { $itemsInCart } items in your cart.</p>
    <p>Cart total: ${ $totalPrice }</p>
    <p>Cart contents:</p>
          
    <ol>
      {#each $cartContents as item}
        <li>{item}</li>
      {/each}
    </ol>
  </main>