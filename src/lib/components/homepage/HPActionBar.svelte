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
    {#each sushi as {type, contents, q}}
            <HPActionBarTile>
                <h3 slot="title">Objednat {type}</h3>
                <p slot="content">(&nbsp;
                {#each contents as {title, q}, index}
                {#if q}
                    {title}&nbsp;({q} ks)&nbsp;<span class=" last-of-type:hidden">/&nbsp;</span>
                {:else}
                    {title}&nbsp;<span class=" last-of-type:hidden">/&nbsp;</span>
                {/if}
                        
                {/each}
                )
                </p>
            </HPActionBarTile>
    {/each}
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