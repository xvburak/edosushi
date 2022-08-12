<script>
    import sheetdb from 'sheetdb-node';
    var client = sheetdb({
        address: 'n4q0i0acx1qeo'
    });

    import { cart } from "$lib/data/cart.js";

    import { address } from "$lib/data/address.js";

    let pay = null;
    let pays = ["Hotovost na místě", "Platba kartou na místě", "Platba převodem"];

    let day = '';
    let days = ["Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota", "Neděle"];
    

    const checkOut = () => {
        alert(JSON.stringify())
        alert(JSON.stringify())
    }



    function sendMessage() {
        let today = new Date();
        var params = {
            datum: today,
            jmeno: $address.name,
            email: $address.email,
            adresa: $address.adresa,
            tel: $address.phone,
            doruceni: document.getElementById("day").value,
            platba: document.getElementById("pay").value,
            obsah: document.getElementById("cart").innerHTML
        }
        console.log(params);
        client.create(params, "Objednavky").then(function (data) {
            console.log(data);
        }, function (err) {
        console.log(err);
    });

    }


    $: total = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

</script>

<form id="contactForm" class="bg-red w-full p-4 text-white flex-1 border-b ">
    <h2 class="mb-4">📨</h2>
    <div class="mb-4">
        <h3 class="mb-4">Pro objednávku, prosím, vyplňte následující informace:</h3>

        <input name="name" id="name" required="true" type="text"
            class="bg-red w-full block placeholder:text-white placeholder:opacity-50 focus:outline-none"
            placeholder="Jméno a příjmení / Název firmy" bind:value={$address.name} />
        <input name="adresa" id="adresa" type="text"
            class="bg-red w-full block placeholder:text-white placeholder:opacity-50 focus:outline-none"
            placeholder="Adresa doručení" bind:value={$address.adresa} />
        <input name="phone" id="phone" type="tel"
            class="bg-red w-full block placeholder:text-white placeholder:opacity-50 focus:outline-none"
            placeholder="Telefoní číslo" bind:value={$address.phone} />
        <input name="email" id="email" type="email"
            class="bg-red w-full block placeholder:text-white placeholder:opacity-50 focus:outline-none"
            placeholder="Email" bind:value={$address.email} />
    </div>

    <div class="select mb-4">
        <h3 class="mb-4">Zvolte způsob placení:</h3>
        { #each pays as payname (payname) }
        <label>
            <input name="pay" id="pay" class="peer appearance-none" type=radio bind:group={pay} value={payname}>
            <span class="opacity-50 peer-checked:opacity-100">{payname}</span>
        </label>
        {/each}
    </div>
    <div>
        <h3 class="mb-4">A vyberte den doručení:</h3>
        { #each days as dayname (dayname) }
        <label class="">
            <input name="day" id="day" class="peer appearance-none" type=radio bind:group={day} value={dayname}>
            <span class="opacity-50 peer-checked:opacity-100">{dayname}</span>
        </label>
        {/each}
    </div>


    <div id="cart" name="cart" class="hidden">
        { #each $cart as item }
            {#if item.quantity > 0}
                {item.title}{".".repeat(15 - item.title.length)}{item.price}{".".repeat(15 - item.price.toString.length)}{item.quantity}&nbsp;&nbsp;&nbsp;&nbsp;{item.price * item.quantity}<br>&nbsp;
            {/if}
        {/each}
        {total}
    </div>
   


   


    <!-- <div name="cart">
        
    </div> -->

    <div class="mt-8"> 
        <button on:click|preventDefault={ sendMessage }>Checkout</button>
    </div>
    
</form>

<div>
    <!-- {#if total} -->
    <a href="/cart2" class="w-full  bg-green text-white p-4 py-6 leading-tight flex justify-between">
        <p class="actionbar  whitespace-nowrap truncate">
            Potvrdit objednávku
        </p>
    
        <p class="actionbar text-right whitespace-nowrap">
            {total} Kč
        </p>
    </a>
</div>








    <!-- // import sheetdb from 'sheetdb-node';

    // var client = sheetdb({
    //     address: 'n4q0i0acx1qeo'
    // });

    // client.read({
    //     sheet: "Objednavky"
    // }).then(function (data) {
    //     console.log(data);
    // }, function (err) {
    //     console.log(err);
    // });
 
    // let rows = [{
    //     datum: "1.1.2000",
    //     jmeno: "vasil",
    //     adresa: "kaplickeho",
    //     tel: "788667556",
    //     email: "burak#gmail.com",
    //     platba:
    //     doruceni
    //     obsah
    //     },
       
    //  -->
    