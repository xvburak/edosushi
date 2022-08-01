<script>
    import {
        init,
        sendForm,
        send
    } from 'emailjs-com';

    init("dMiJTl644Kugx1an4");

    import {
        cart
    } from "$lib/data/cart.js";

    import {
        address
    } from "$lib/data/address.js";

    let pay = 1;
    let day = "Středa";

    let days = ["Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota", "Neděle"]
    let pays = ["Hotovost na místě", "Platba kartou na místě", "Platba převodem"]

    const checkOut = () => {
        alert(JSON.stringify())
        alert(JSON.stringify())
    }



    function sendMessage() {
//         let items = ''
//         for (let i of $cart) {
//             items += `${i.title}
// `
//         }

//         let quantitites = ''
//         for (let i of $cart) {
//             quantitites += `${i.quantity}
// `
//         }

        var params = {
            name: $address.name,
            email: $address.email,
            adresa: $address.adresa,
            phone: $address.phone,
            day: document.getElementById("day").value,
            pay: document.getElementById("pay").value,
            cart: document.getElementById("cart").innerHTML
            // items: items,
            // quantitites: quantitites
        }
        send("service_jd1yt9p", "template_wagx9rf", params)
            .then(
                console.log(params)
            )
            .catch(() => {
                window.alert('Error! Try again later.');
            })
    }

    // function sendForm() {
    //     let message = document.getElementById('contactForm');
    // let name = document.getElementById('name');
    // let phone = document.getElementById('phone');
    // let email = document.getElementById('email');
    // let adresa = document.getElementById('adresa');
    // let pay = document.getElementById('pay');
    // let day = document.getElementById('day');
    // let cart = document.getElementById('cart');

    // var templateParams = {
    //     name:name.value,
    //     phone:phone.value,
    //     email:email.value,
    //     adresa:adresa.value,
    //     pay:pay.value,
    //     day:day.value,
    //     cart:cart
    // };

    //     sendForm("service_jd1yt9p","template_wagx9rf", message)
    //     .catch(() => {
    //             window.alert('Error! Try again later.');
    //         })
    // }
</script>

<form id="contactForm" class="bg-red w-full p-4 text-white ">
    <h2 class="mb-4">📨</h2>
    <div class="mb-4">
        <h3 class="mb-4">Pro objednávku, prosím, vyplňte následující informace:</h3>
        <input name="name" id="name" type="text"
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
        { #each pays as payname }
        <label>
            <input name="pay" id="pay" class="peer appearance-none" type=radio bind:group={pay} value={payname}>
            <span class="opacity-50 peer-checked:opacity-100">{payname}</span>
        </label>
        {/each}
    </div>
    <div>
        <h3 class="mb-4">A vyberte den doručení:</h3>
        { #each days as dayname }
        <label class="">
            <input name="day" id="day" class="peer appearance-none" type=radio bind:group={day} value={dayname}>
            <span class="opacity-50 peer-checked:opacity-100">{dayname}</span>
        </label>
        {/each}
    </div>


    <div id="cart" name="cart">
        { #each $cart as item }
            {#if item.quantity > 0}
                {item.title}&nbsp;&nbsp;&nbsp;&nbsp;{item.price}&nbsp;&nbsp;&nbsp;&nbsp;{item.quantity}&nbsp;&nbsp;&nbsp;&nbsp;{item.price * item.quantity}<br>
            {/if}
        {/each}
    </div>
   


    <!-- <div name="cart">
        
    </div> -->

    <div class="mt-8"> 
        <button on:click|preventDefault={ sendMessage }>Checkout</button>
    </div>
    
</form>



<style>
   .select label {
        @apply block
    }

    h3 {
        @apply text-yellow
    }

    /* label input {
        @apply peer appearance-none
    }

    label p {
        @apply opacity-50 peer-checked:opacity-100
    } */
</style>