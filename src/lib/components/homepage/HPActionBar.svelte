<script>
    import { sets } from "$lib/data/sets.js";
    import { boxes } from "$lib/data/boxes.js";
</script>

<div class="flex space-x-2 bg-none base">
    <a sveltekit:prefetch href="/boxcart" class="w-full bg-green text-white p-4 py-6 leading-tight flex flex-col justify-center">
        <h3 class="title ">
            Objednat Obědový box

        </h3>
        <p class="content opacity-50">
            ({#each $boxes as box}{#if box.id == 12}&nbsp;{box.title}{:else}&nbsp;{box.title} / {/if}{/each}&nbsp;)</p>
    </a>

    <a sveltekit:prefetch href="/setcart" class="w-full bg-green text-white p-4 py-6 leading-tight flex flex-col justify-center">
        <h3 class="title ">
            Objednat Sushi Set
        </h3>
        <p class="content opacity-50">
            ({#each $sets as set}{#if set.id == 2}&nbsp;{set.title}{:else}&nbsp;{set.title}&nbsp;/{/if}{/each}&nbsp;)</p>
    </a>
</div>

<div class="flex space-x-2 bg-none phone">
    <a sveltekit:prefetch href="/mobilecart" class="w-full bg-green text-white p-4 py-6 leading-tight flex flex-col justify-center">
        <h3 class="title actionbar text-center">
            Objednat →
        </h3>
    </a>
</div>
