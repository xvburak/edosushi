<script>
	import { page } from '$app/stores';
	import { setcart } from "$lib/data/setcart.js";
	import { boxcart } from "$lib/data/boxcart.js";
    import DropdownMenu from "$lib/components/DropdownMenu.svelte";

	let y;

	$: boxsum = $boxcart.reduce((sum, item) => sum + item.quantity, 0)
    $: setsum = $setcart.reduce((sum, item) => sum + item.quantity, 0)
	$: fullsum = setsum + boxsum
</script>

<svelte:window bind:scrollY={y}/>
<div class="bg-white w-full {y >= 26 ? 'fixed top-0' : ''} z-30">
	<header>
	<DropdownMenu />
	<nav class="h-10 flex flex-col base justify-center">
		<div class="{$page.url.pathname === '/' ? 'justify-center' : 'justify-between'} flex py-1 px-6 items-center">

			<div class="{$page.url.pathname === '/' ? 'hidden' : ''} flex-1">
				<a sveltekit:prefetch href="/">
					<svg width="1.5rem" height="1.5rem" xmlns="http://www.w3.org/2000/svg">
						<circle cx="0.75rem" cy="0.75rem" r="0.75rem" fill="#F2994A" />
					</svg>
				</a>
			</div>

			<ul
				class="flex justify-center flex-grow space-x-12 {$page.url.pathname === '/' ? 'text-black' : 'text-gray'}">
				<li class:active={$page.url.pathname==='/onas' }>
					<a sveltekit:prefetch href="/onas">O nás</a>
				</li>
				<li class:active={$page.url.pathname==='/galerie' }>
					<a sveltekit:prefetch href="/galerie">Galerie</a>
				</li>
				<li class:active={$page.url.pathname==='/rozvoz' }>
					<a sveltekit:prefetch href="/rozvoz">Rozvoz</a>
				</li>
				<li class:active={$page.url.pathname==='/kontakt' }>
					<a sveltekit:prefetch href="/kontakt"> Kontakt</a>
				</li>
			</ul>

			<div class="{$page.url.pathname === '/' ? 'hidden' : ''}  flex-1 text-right">
				<a sveltekit:prefetch href="/cart2">🛒 {fullsum}</a>
			</div>

		</div>
		</nav>
	</header>
</div>
<style>
	li.active {
		@apply text-black
	}

	@media (max-width: 767px) {
        .base {
            @apply hidden;
        }
    }
</style>