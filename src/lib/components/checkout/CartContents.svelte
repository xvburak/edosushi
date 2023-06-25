<script>
	import {boxcart} from "$lib/data/boxcart.js";
	import {boxes} from "$lib/data/boxes.js";

	$: boxsumka = $boxcart.reduce((sum, item) => sum + item.quantity, 0)

	import {setcart} from "$lib/data/setcart.js";
	import {sets} from "$lib/data/sets.js";

	function handleClick() {
		window.location.href = '/mobilecheckout'
	}

	let anyBoxNotIncluded;
	$: anyBoxNotIncluded = $boxes.some(product => !$boxcart.includes(product));

	let anySetNotIncluded;
	$: anySetNotIncluded = $sets.some(product => !$setcart.includes(product));

	$: hasItemsInCart = $boxcart.length > 0 || $setcart.length > 0;

	function resetCarts() {
		window.location.replace("/");
		setTimeout(() => {
			$boxcart = [];
			$setcart = [];
		}, 500);
	}


	const boxAddToCart = (product) => {
		for (let item of $boxcart) {
			if (item.id === product.id) {
				product.quantity += 1
				$boxcart = $boxcart;
				return;
			}
		}
		$boxcart = [...$boxcart, product]
	}

	const boxMinusItem = (product) => {
		for (let item of $boxcart) {
			if (item.id === product.id) {
				if (product.quantity > 1) {
					product.quantity -= 1
					$boxcart = $boxcart
				} else {
					$boxcart = $boxcart.filter((cartItem) => cartItem != product)
				}
				return;
			}
		}
	}


	const boxPlusItem = (product) => {
		for (let item of $boxcart) {
			if (item.id === product.id) {
				product.quantity += 1
				$boxcart = $boxcart;
				return;
			}
		}
	}

	const setAddToCart = (product) => {
		for (let item of $setcart) {
			if (item.id === product.id) {
				product.quantity += 1
				$setcart = $setcart;
				return;
			}
		}
		$setcart = [...$setcart, product]
	}

	const setMinusItem = (product) => {
		for (let item of $setcart) {
			if (item.id === product.id) {
				if (product.quantity > 1) {
					product.quantity -= 1
					$setcart = $setcart
				} else {
					$setcart = $setcart.filter((cartItem) => cartItem != product)
				}
				return;
			}
		}
	}

	const setPlusItem = (product) => {
		for (let item of $setcart) {
			if (item.id === product.id) {
				product.quantity += 1
				$setcart = $setcart;
				return;
			}
		}
	}
</script>

<div class="w-full p-4 text-white flex-1">
	<h2 class="mb-4">🛒</h2>
	{#each $boxcart as item }
		{#if item.quantity > 0}
		<div class="flex space-x-4">
            <div class="w-1/2">
                <p>{item.title}</p>
            </div>
			<div class="flex w-1/3 space-x-2">
				<button on:click={() => boxMinusItem(item)}>-</button>
                <p>{item.quantity} ks</p>
                <button on:click={() => boxPlusItem(item)}>+</button>
			</div>
            <div class="w-1/3 md:text-left text-right">
                <p>{item.price * item.quantity} Kč</p>
            </div>
			
		</div>
		{/if}
	{/each}
	{#each $setcart as item }
		{#if item.quantity > 0}
		<div class="flex space-x-4">
            <div class="w-1/2">
                <p>{item.title}</p>
            </div>
			<div class="flex w-1/3 space-x-2">
				<button on:click={() => setMinusItem(item)}>-</button>
                <p>{item.quantity} ks</p>
                <button on:click={() => setPlusItem(item)}>+</button>
			</div>
            <div class="w-1/3 md:text-left text-right">
                <p>{item.price * item.quantity} Kč</p>
            </div>
			
		</div>
		{/if}
	{/each}
</div>



{#if anyBoxNotIncluded}
  <a href="/boxcart" class="w-full border-t-2 border-gray bg-white p-4 py-6 leading-tight flex justify-between">
    <p class="actionbar  whitespace-nowrap truncate">
      <span>+</span> Přidat obědový box
    </p>
  </a>
{/if}

{#if anySetNotIncluded}
  <a href="/setcart" class="w-full border-t-2 border-gray bg-white p-4 py-6 leading-tight flex justify-between">
    <p class="actionbar  whitespace-nowrap truncate">
      <span>+</span> Přidat sushi set
    </p>
  </a>
{/if}

{#if hasItemsInCart}
	<div class="w-full border-t-2 bg-red text-white p-4 py-6 leading-tight flex justify-between" on:click={resetCarts}>
		<p class="actionbar whitespace-nowrap truncate">
		<span>×</span> Zrušit objednávku
		</p>
	</div>
{/if}

	<div class="phone"> 
		{#if boxsumka > 4 || $setcart.length > 0}
	
		<a sveltekit:prefetch href="/mobilecheckout" class="w-full border-t border-gray  bg-green text-white p-4 py-6 leading-tight flex justify-between">
			<p class="actionbar text-center w-full  whitespace-nowrap truncate">
				Objednat →			
			</p>

		</a>
	
	{:else}
	
	<div href="/cart1" class="w-full border-t border-gray bg-red text-white p-4 py-6 leading-tight flex justify-between">
		<p class="actionbar text-center w-full opacity-50 whitespace-nowrap truncate">
			Objednat →		
		</p>
	</div>
		
	{/if}
		
	</div>