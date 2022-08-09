<script>
    import "../app.css";
    import Anouncment from "$lib/components/Anouncment.svelte";
    import ActionBar from "$lib/components/cart/ActionBar.svelte";
    import CheckOutBar from "$lib/components/checkout/CheckOutBar.svelte";
    import NavBar from "$lib/components/NavBar.svelte";
    import { page } from '$app/stores';
    import HPActionBar from "$lib/components/homepage/HPActionBar.svelte";
 </script>



<section class="flex flex-col h-screen">
    <Anouncment /> 
    <NavBar />
    {#if $page.url.pathname === '/'}
        <div class="bg-hp-bg bg-cover flex-1 overflow-auto flex flex-col justify-end">
            <slot />
            <HPActionBar />
        </div>
    {:else if $page.url.pathname === '/cart2'}
        <div class="bg-gray flex-1 flex flex-col ">
            <slot />
        </div>
    {:else if $page.url.pathname === '/cart3'}
        <div class="bg-green flex-1 flex flex-col justify-center">
            <slot />
        </div>
    {:else}
        <div class="bg-gray flex-1 flex flex-col ">
            <slot />
            <ActionBar />
        </div>
    {/if}
</section>


