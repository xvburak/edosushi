<script>
	import HPActionBarTile from "$lib/components/homepage/HPActionBarTile.svelte";
    import sushi from '$lib/data/sushis.json';
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

<div class="flex space-x-2">
    {#each sushi as {type, contents}}
            <HPActionBarTile>
                <h3 slot="title">Objednat {type}</h3>

                <p slot="content">(&nbsp;
                {#each contents as {title}, index}
                        {title}&nbsp;<span class=" last-of-type:hidden">/&nbsp;</span>
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