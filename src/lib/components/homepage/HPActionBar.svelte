<script>
	import HPActionBarTile from "$lib/components/homepage/HPActionBarTile.svelte";
    import sushi from '$lib/data/sushis.json';

    // import { count } from './stores.js';

    function increment() {
        count.update(n => n + 1);
    }
</script>




<!-- {#each sushi as {title, type, contents}}
    {#if type === "box"}
        <HPActionBarTile>
            <h3 slot="title">Objednat obědový box</h3>
            <p slot="content"> huuu</p>
        </HPActionBarTile>
    {:else if type === "set"}
        <HPActionBarTile>
            <h3 slot="title">Objednat sushi set</h3>
            <p slot="content"> huuu</p>
        </HPActionBarTile>
    {/if}
{/each} -->

<div class="flex space-x-2 bg-none">
    <div href="/cart1" class="w-full bg-green text-white p-4 py-6 leading-tight flex flex-col justify-center">
        <h3 class="title ">
            Objednat obědový box

        </h3>
        <p class="content opacity-50">
            (Edo Box / Maki Box / Veg Box)
        </p>
    </div>

    <a href="/cart1" class="w-full bg-green text-white p-4 py-6 leading-tight flex flex-col justify-center">
        <h3 class="title ">
            Objednat Sushi Set
        </h3>
        <p class="content opacity-50">
            (Family Set (43 ks) / Party Set (69 ks))
        </p>
    </a>
    
    <!-- {#each sushi as sush}
            <HPActionBarTile>
                <h3 slot="title">Objednat {sush.title}</h3>
                <p slot="content">(&nbsp;
                {#each sush.contents as content, index}
                {#if content.q}
                    {content.title}&nbsp;({content.q} ks)&nbsp;<span class=" last-of-type:hidden">/&nbsp;</span>
                {:else}
                    {content.title}&nbsp;<span class=" last-of-type:hidden">/&nbsp;</span>
                {/if}
                        
                {/each}
                )
                </p>
            </HPActionBarTile>
    {/each} -->
</div>
<!-- <HPActionBarTile>
    <h3 slot="title">Objednat obědový box</h3>
    <p slot="content"> huuu</p>
</HPActionBarTile> -->

<!-- {#each sushi as {title, contents}}
    <h1>{title}</h1>
    {#each contents as {title, q, contents}}
        <p>{title}</p>
        <p>{q}</p>
        <p>{contents}</p>
    {/each}
{/each} -->

<!-- 
<ContactCard>
	<span slot="name">
		P. Sherman
	</span>

	<span slot="address">
		42 Wallaby Way<br>
		Sydney
	</span>
</ContactCard> -->