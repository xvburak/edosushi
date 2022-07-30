<script>
    import { fullCount } from '$lib/data/stores.js';

    let countValue;

	fullCount.subscribe(value => {
		countValue = value;
	});
</script>

{#if countValue > 0}

<a href="/cart2" class="w-full  bg-green text-white p-4 py-6 leading-tight flex justify-between">
    <p class="actionbar  whitespace-nowrap truncate">
        Objednat
    </p>

    <p class="actionbar text-right whitespace-nowrap opacity-50">
        {countValue} Kč
    </p>
</a>

{:else}

<div href="/cart1" class="w-full bg-red text-white p-4 py-6 leading-tight flex justify-between">
    <p class="actionbar opacity-50 whitespace-nowrap truncate">
        Pro objednání, prosím, vyberte alespoň jeden produkt
    </p>

    <p class="actionbar text-right whitespace-nowrap opacity-50">
        0 Kč
    </p>
</div>
    
{/if}
