<script>
    import { cart } from "$lib/data/cart.js";
    import { address } from "$lib/data/address.js";
    $: total = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    

</script>


