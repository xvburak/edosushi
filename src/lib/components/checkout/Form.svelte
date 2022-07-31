<script>
    let name = '';
    let adresa = '';
    let telefon = '';
    let email = '';

    let pay = 1;
    let day = 1;
</script>

<div class="bg-red w-full p-4 text-white">
    <h2 class="mb-4">📨</h2>
    <div class="mb-4">  
        <h3 class="mb-4">Pro objednávku, prosím, vyplňte následující informace:</h3>
            <input class="bg-red w-full placeholder:text-white placeholder:opacity-50" placeholder="Jméno a příjmení / Název firmy" bind:value={name} />
            <input class="bg-red w-full placeholder:text-white placeholder:opacity-50" placeholder="Adresa doručení" bind:value={adresa} />
            <input class="bg-red w-full placeholder:text-white placeholder:opacity-50" placeholder="Telefoní číslo" bind:value={telefon} />
    </div>
    <div class="select mb-4">
        <h3 class="mb-4">Zvolte způsob placení:</h3>

        <label class="">
            <input type=radio bind:group={pay} value={1}>
            Hotovost na místě
        </label>
        
        <label>
            <input type=radio bind:group={pay} value={2}>
            Platba kartou na místě
        </label>
        
        <label>
            <input type=radio bind:group={pay} value={3}>
            Platba převodem
        </label>        
    </div>
    <div>
        <h3 class="mb-4">A vyberte den doručení:</h3>
        <label class="">
            <input type=radio bind:group={day} value={1}>
            Pondělí
        </label>
        <label class="">
            <input type=radio bind:group={day} value={2}>
            Úterý
        </label>
        <label class="">
            <input type=radio bind:group={day} value={3}>
            Středa
        </label>
        <label class="">
            <input type=radio bind:group={day} value={4}>
            Čtvrtek
        </label>
        <label class="">
            <input type=radio bind:group={day} value={5}>
            Pátek
        </label>
        <label class="">
            <input type=radio bind:group={day} value={6}>
            Sobota
        </label>
        <label class="">
            <input type=radio bind:group={day} value={7}>
            Neděle
        </label>
    </div>
</div>

<style>
   .select label {
        @apply block
    }

    label input {
        @apply checked:text-green appearance-none
    }
</style>