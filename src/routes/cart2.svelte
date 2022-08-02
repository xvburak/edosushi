<script>
    import CartContents from "$lib/components/checkout/CartContents.svelte";
    import Form from "$lib/components/checkout/FormTest.svelte";
    import CheckOutBar from "$lib/components/checkout/CheckOutBar.svelte";
</script>

<div class="flex flex-1 ">
    <div class="flex flex-col w-1/2">
        <CartContents />
    </div>

    <div class="flex flex-col w-1/2">
        <Form />
        <CheckOutBar />
    </div>
 </div>
