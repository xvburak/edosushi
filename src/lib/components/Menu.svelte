<script>
	import { page } from '$app/stores';
</script>

<header class="bg-white text-black">
	<nav>
		<ul class="flex justify-center space-x-12 py-1">
			<li class:active={$page.url.pathname === '/onas'}>
                <a sveltekit:prefetch href="/onas">O nás</a>
            </li>
			<li class:active={$page.url.pathname === '/galerie'}>
				<a sveltekit:prefetch href="/galerie">Galerie</a>
			</li>
			<li class:active={$page.url.pathname === '/rozvoz'}>
				<a sveltekit:prefetch href="/rozvoz">Rozvoz</a>
			</li>
            <li class:active={$page.url.pathname === '/kontakt'}>
				<a sveltekit:prefetch href="/kontakt"> Kontakt</a>
			</li>
		</ul>
	</nav>
</header>

