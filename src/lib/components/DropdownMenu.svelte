<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { cart } from "$lib/data/cart.js";
    import { scale } from 'svelte/transition';

    let show = false; // menu state
    let menu = null; // menu wrapper DOM reference

    onMount(() => {

        const handleOutsideClick = (event) => {
            if (show && !menu.contains(event.target)) {
                show = false;
            }
        };

        const handleEscape = (event) => {
            if (show && event.key === 'Escape') {
                show = false;
            }
        };

        // add events when element is added to the DOM
        document.addEventListener('click', handleOutsideClick, false);
        document.addEventListener('keyup', handleEscape, false);

        // remove events when element is removed from the DOM
        return () => {
            document.removeEventListener('click', handleOutsideClick, false);
            document.removeEventListener('keyup', handleEscape, false);
        };
    });
</script>

<div on:click={()=> (show = !show)} class="flex drop  h-12" bind:this={menu}>
    <div class="flex w-full ">
        <div class="flex justify-between items-center w-full">
            <div class="h-12 flex flex-col justify-center">

                    <button class="menu focus:outline-none focus:shadow-solid">
                        <svg class="w-10 h-10 " viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="28" height="28"/>
                            <rect x="4" y="9" width="20" height="2" fill="#4F4F4F"/>
                            <rect x="4" y="17" width="20" height="2" fill="#4F4F4F"/>
                        </svg>
                    </button>
                
            </div>
            
            
            <div class:active={$page.url.pathname==='/' }>
                <a sveltekit:prefetch href="/">EDOSUSHI</a>
            </div>
          
            
            <div class=" text-right">
				<a sveltekit:prefetch href="/cart2">🛒 {$cart.reduce((sum, item) => sum + item.quantity, 0)}</a>
			</div>
        </div>
        

        {#if show}
        <div
          in:scale={{ duration: 100, start: 0.95 }}
          out:scale={{ duration: 75, start: 0.95 }} 
          class="origin-top-right flex flex-col p-4 space-y-6 show bg-white absolute text-center right-0 top-20 w-full text-2xl leading-none"
        >
            <div class:active={$page.url.pathname==='/onas' }>
                <a sveltekit:prefetch href="/onas">O nás</a>
            </div>
            <div class:active={$page.url.pathname==='/galerie' }>
                <a sveltekit:prefetch href="/galerie">Galerie</a>
            </div>
            <div class:active={$page.url.pathname==='/rozvoz' }>
                <a sveltekit:prefetch href="/rozvoz">Rozvoz</a>
            </div>
            <div class:active={$page.url.pathname==='/kontakt' }>
                <a sveltekit:prefetch href="/kontakt"> Kontakt</a>
            </div>
        </div>
      {/if}
    </div>
  </div>


  <style>
        @media (min-width: 768px) {
        .drop {
            @apply hidden;
        }
    }

    .show div {
        
    }

  </style>