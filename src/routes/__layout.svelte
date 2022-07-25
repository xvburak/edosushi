<script>
    import "../app.css";
    import Anouncment from "$lib/components/Anouncment.svelte";
    import NavBar from "$lib/components/NavBar.svelte";
    import { page } from '$app/stores';
  </script>



<section class="flex flex-col h-screen">
    <Anouncment /> 
    <NavBar />
    {#if $page.url.pathname === '/'}
        <div class="bg-hp-bg flex-1 overflow-auto">
            <slot />
        </div>

    {:else}
        <div class="bg-gray flex-1 overflow-auto flex flex-col">
            <slot />
        </div>
    {/if}
</section>





<!-- <section class="flex flex-col h-screen">
    <Anouncment /> 
    <Menu />

    {#if $page.url.pathname === '/'}
        <div class="bg-hp-bg flex-1 overflow-auto">
            <slot />
        </div>
    {:else}
        <div class="bg-gray flex-1 overflow-auto flex flex-col">
            <slot />
        </div>
    {/if}

</section> -->
