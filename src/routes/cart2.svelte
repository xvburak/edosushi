<script>
    import CartContents from "$lib/components/checkout/CartContents.svelte";
    import FormTest from "$lib/components/checkout/FormTest.svelte";
</script>

<div class="flex flex-1 ">
    <div class="flex flex-col w-full md:w-1/2">
        <CartContents />
    </div>

    <div class="flex flex-col base w-1/2">
        <FormTest />
    </div>
 </div>
