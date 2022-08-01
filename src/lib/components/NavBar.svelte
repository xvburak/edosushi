<script>
	import { page } from '$app/stores';
	import { cart } from "$lib/data/cart.js";

</script>

<header class="bg-white">
	<nav>
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
				<a sveltekit:prefetch href="/cart2">🛒 {$cart.reduce((sum, item) => sum + item.quantity, 0)}</a>
			</div>

		</div>
	</nav>
</header>

<style>
	li.active {
		@apply text-black
	}
</style>