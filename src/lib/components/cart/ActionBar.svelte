<script>
    import { cart } from "$lib/data/cart.js";
    import { page } from '$app/stores';

    $: total = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    $: sumka = $cart.reduce((sum, item) => sum + item.quantity, 0)
    $: ids = $cart.reduce((sum, item) => item.id, 0)

</script>
{#if $page.url.pathname === '/boxcart'}
    {#if sumka > 4}
    <a href="/cart2" class="w-full  bg-green text-white p-4 py-6 leading-tight flex justify-between">
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

    {:else}

    <div href="/cart1" class="w-full bg-red text-white p-4 py-6 leading-tight flex justify-between">
        <p class="actionbar opacity-50 whitespace-nowrap truncate w-2/3">
            Pro objednání, přidejte ještě {5 - sumka} ks
        </p>
        <p class="actionbar text-right whitespace-nowrap opacity-50 w-1/6">
            {sumka} ks
        </p>
        <p class="actionbar text-right whitespace-nowrap opacity-50 w-1/6">
            0 Kč
        </p>
    </div>
        
    {/if}
{:else if $page.url.pathname === '/mobilecart'}
    {#if sumka > 4 || ids === '1' || ids === '2'}
    <div class="fixed w-full overflow-hidden bottom-0">
        <a href="/cart2" class="w-full  bg-green text-white p-4 py-6 leading-tight flex justify-between">
            <p class="actionbar  whitespace-nowrap truncate">
                Přidat 
            </p>
            <p class="actionbar text-right whitespace-nowrap">
                {total} Kč
            </p>
        </a>
    </div>
    {:else}

    <div class="fixed w-full bottom-0">
        <div href="/cart1" class="w-full bg-red text-white p-4 py-6 leading-tight flex justify-between">
            <p class="actionbar opacity-50 whitespace-nowrap truncate w-2/3">
               ??aspon  5 boxů / 1 set
            </p>

            <p class="actionbar text-right whitespace-nowrap opacity-50 w-1/6">
                0 Kč
            </p>
        </div>
    </div>
    
        
    {/if}
{:else}
    {#if total > 0}

    <a href="/cart2" class="w-full  bg-green text-white p-4 py-6 leading-tight flex justify-between">
        <p class="actionbar  whitespace-nowrap truncate">
            Přidat do košíku
        </p>

        <p class="actionbar text-right whitespace-nowrap">
            {total} Kč
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
{/if}


