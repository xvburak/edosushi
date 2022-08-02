<script>
    import {
        onMount
    } from 'svelte';

    onMount(() => {
        setTimeout(function () {
            window.location.href = "/";
        }, 5000);
    });
</script>

<div class="mx-auto text-left text-4xl max-w-screen-md flex space-x-4 items-center text-white">

    <div class="mix-blend-multiply">
        <img class="" src="/icons8-checkmark.gif" width="200" alt="404 image" />
    </div>



    <p>Vaše objednávka byla úspěšně přijata,
        arigatōgozaimashita!</p>
</div>