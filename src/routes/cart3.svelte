<script>
    import {
        onMount
    } from 'svelte';

    onMount(() => {
        setTimeout(function () {
            window.location.href = "/";
        }, 10000);
    });
</script>

<div class="mx-auto text-left text-4xl max-w-screen-lg flex space-x-4 items-center text-white">

    <div class="mix-blend-multiply">
        <img  src="/icons8-checkmark.gif" width="200" alt="checkout info" />
    </div>

    <p>Vaše objednávka byla úspěšně přijata, arigatōgozaimashita!</p>
</div>