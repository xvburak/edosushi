<script>
	import CheckOutBar from "$lib/components/checkout/CheckOutBar.svelte";
    import { cart } from "$lib/data/cart.js";
	import LastTimeAdd from "$lib/components/checkout/LastTimeAdd.svelte";

    const minusItem = (product) => {
		for(let item of $cart) {
				if(item.id === product.id) {
					if(product.quantity > 1 ) {
							product.quantity -= 1
							$cart = $cart
					} else {
							$cart = $cart.filter((cartItem) => cartItem != product)
					}
					return;
				}
		}
	}
	
	const plusItem = (product) => {
			for(let item of $cart) {
							if(item.id === product.id) {
								product.quantity += 1
								$cart = $cart;
								return;
							}
					}
	}
</script>


<div class="w-full p-4 text-white flex-1">
    <h2 class="mb-4">🛒</h2>
    {#each $cart as item }
		{#if item.quantity > 0}
		<div class="flex space-x-4">
            <div class="w-1/2">
                <p>{item.title} <span class="opacity-50">({item.q} ks)</span></p>
            </div>
			<div class="flex w-1/3 space-x-2">
				<button on:click={() => minusItem(item)}>-</button>
                <p>{item.quantity} ks</p>
                <button on:click={() => plusItem(item)}>+</button>
			</div>
            <div class="w-1/3 ">
                <p>{item.price * item.quantity} Kč</p>
            </div>
			
		</div>
		{/if}
	{/each}


</div>

<!-- <LastTimeAdd /> -->