<script>
    import { cart } from "$lib/data/cart.js";
    import { page } from '$app/stores';
    import { boxes } from "$lib/data/boxes.js";
    export let product

    $: total = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    $: sumka = $cart.reduce((sum, item) => sum + item.quantity, 0)
    $: ids = $cart.reduce((sum, item) => item.id, 0)

    $: boxsumka = $cart.reduce((sum, item) => sum + item.quantity, 0)
    $: setsumka = $cart.reduce((sum, item) => sum + item.quantity, 0)


    
</script>
{#if $page.url.pathname === '/boxcart'}
    {#if sumka > 4}
    <a href="/cart2" class="w-full z-50  base bg-green text-white p-4 py-6 leading-tight flex justify-between">
        <p class="actionbar  whitespace-nowrap truncate w-2/3">
            Přidat do košíku
        </p>
        <p class="actionbar text-right whitespace-nowrap opacity-50 w-1/6">
            {sumka} ks
        </p>
        <p class="actionbar text-right whitespace-nowrap w-1/6">
            {total} Kč
        </p>
    </a>

    <a href="/cart2" class="w-full z-50  phone bg-green text-white p-4 py-6 leading-tight fixed bottom-0 justify-between">
        <div class="flex">
            <p class="actionbar whitespace-nowrap truncate w-full">
                Přidat do košíku
            </p>
            <p class="actionbar whitespace-nowrap truncate text-right w-full">
                {total} Kč
            </p>
        </div>
        
        <!-- <p class=" text-right whitespace-nowrap opacity-50 w-1/6">
            {sumka} ks
        </p>
        <p class=" text-right whitespace-nowrap w-1/6">
            {total} Kč
        </p> -->
    </a>

    {:else}

    <div href="/cart1" class="w-full z-50 base bg-red text-white p-4 py-6 leading-tight flex justify-between">
        <p class="actionbar opacity-50 whitespace-nowrap truncate w-2/3">
            Pro objednání přidejte ještě {5 - sumka} ks
        </p>
        <p class="actionbar text-right whitespace-nowrap opacity-50 w-1/6">
            {sumka} ks
        </p>
        <p class="actionbar text-right whitespace-nowrap opacity-50 w-1/6">
            0 Kč
        </p>
    </div>

    <div href="/cart1" class="w-full z-50 phone  bg-red text-white p-4 py-6 leading-tight fixed bottom-0 justify-between">
        <p class="actionbar opacity-50 whitespace-nowrap truncate w-full">
            Pro objednání, přidejte ještě {5 - sumka} ks
        </p>
    </div>
        
    {/if}
{:else}
    {#if total > 0}

    <a href="/cart2" class="w-full z-50 base  bg-green text-white p-4 py-6 leading-tight flex justify-between">
        <p class="actionbar  whitespace-nowrap truncate">
            Přidat do košíku
        </p>

        <p class="actionbar text-right whitespace-nowrap">
            {total} Kč
        </p>
    </a>

    <a href="/cart2" class="w-full z-50  phone bg-green text-white p-4 py-6 leading-tight fixed bottom-0 justify-between">
       <div class="flex">
            <p class="actionbar  whitespace-nowrap truncate w-full">
                Přidat do košíku
            </p>

            <p class="actionbar text-right  whitespace-nowrap">
                {total} Kč
            </p>
       </div>
        
    </a>

    {:else}

    <div class="w-full z-50 base bg-red text-white p-4 py-6 leading-tight flex justify-between">
        <p class="actionbar opacity-50 whitespace-nowrap truncate">
            Pro objednání, prosím, vyberte alespoň jeden produkt
        </p>

        <p class="actionbar text-right whitespace-nowrap opacity-50">
            0 Kč
        </p>
    </div>

    <div class="w-full z-50 phone bg-red text-white p-4 py-6 leading-tight fixed bottom-0 justify-between">
        <div class="flex">
            <p class="actionbar opacity-50 whitespace-nowrap w-full truncate">
                Vyberte alespoň jeden produkt
            </p>
    
            <p class="actionbar text-right whitespace-nowrap opacity-50">
                0 Kč
            </p>
        </div>
    </div>
        
    {/if}
{/if}


