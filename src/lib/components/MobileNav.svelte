<script>
	import { page } from '$app/stores';
	import { cart } from "$lib/data/cart.js";
    import DropdownMenu from "$lib/components/DropdownMenu.svelte";


</script>

<header class="bg-white">
	
	<nav>
        <div class="">
            <DropdownMenu />
        </div>
	</nav>
</header>

<style>
	li.active {
		@apply text-black
	}
</style>