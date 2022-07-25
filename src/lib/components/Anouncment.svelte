<script>
    import Marquee from "svelte-marquee";
    let status = 1;
    
</script>

{#if status === 0}
<div class="bg-red text-center py-1 text-white">
    <Marquee reverse="true" speed="slow" content="Dnes již nedoručujeme. Nově vytvořené objednávky rozvážíme následující den.&nbsp;&nbsp;&nbsp;🍣&nbsp;&nbsp;&nbsp;" />
</div>

{:else if status === 1} 
<div class="bg-orange text-center py-1 text-white">
    <Marquee reverse="true" speed="slow" content="Abychom zaručili čerstvost pokrmů, přijímáme objednávky den předem do 17 hodin.&nbsp;&nbsp;&nbsp;🍱&nbsp;&nbsp;&nbsp;" />
</div>


{:else}
<div class="bg-yellow text-center py-1 text-white">
    <Marquee reverse="true" speed="slow" content="Nabízíme také sushi jako zpestření obchodních jednání, rodinných oslav a rautů. Dodáváme sushi na míru. &nbsp;&nbsp;&nbsp;🍱&nbsp;&nbsp;&nbsp;" />
</div>

{/if}
<!-- <div class="bg-orange text-center py-1 text-white">
    <p>Abychom zaručili čerstvost pokrmů, přijímáme objednávky den předem do 17 hodin. 🍱</p> 
</div> -->



