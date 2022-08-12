<script>
    import sheetdb from 'sheetdb-node';
    var client = sheetdb({
        address: 'n4q0i0acx1qeo'
    });
	// importing Stores
	import {
		cart
	} from "$lib/data/cart.js";
	import {
		address
	} from "$lib/data/address.js";

	$: total = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

	let pay = "Hotovost na místě";
	let day = "Pondělí";

	let days = ["Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota", "Neděle"];
	let pays = ["Hotovost na místě", "Platba kartou na místě", "Platba převodem"];

	// EmailJS function
	function sendMessage() {	
		let day = document.getElementById("omgday").innerText;
		let pay = document.getElementById("omgpay").innerText;
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


	// Define schema with Yup
	import * as yup from 'yup';

	const schema = yup.object().shape({
		name: yup.string().required('Zadejte jméno'),
		address: yup.string().required('Zadejte adresu doručení'),
		phone: yup.string().required('Zadejte telefoní číslo'),
		email: yup.string().required('Zadejte e-mailovou adresu').email("Zkuste to znovu"),
	});

	let values = {};
	let errors = {};

	async function submitHandler() {
		try {
			// `abortEarly: false` to get all the errors
			await schema.validate(values, {
				abortEarly: false
			});
			alert(JSON.stringify(values, null, 2));
			errors = {};
			sendMessage();

		} catch (err) {
			errors = extractErrors(err);
		}
	}

	function extractErrors(err) {
		return err.inner.reduce((acc, err) => {
			return {
				...acc,
				[err.path]: err.message
			};
		}, {});
	}
</script>

	<div class:bg-green={$address.name && $address.adresa && $address.email && $address.phone && $cart.length > 0} class="bg-red p-4 flex-1 text-white">

	<form name="contactForm" on:submit|preventDefault={sendMessage}>
		<div class="mb-4">
			<h3>Pro objednávku, prosím, vyplňte následující informace:</h3>
			<div class="flex">
				<input class="w-full" type="text" name="name" id="name" bind:value={$address.name}
					placeholder="Jméno a příjmení / Název firmy" />
				<p class="error">{#if errors.name}{errors.name}{/if}</p> 
			</div>
			<div class="flex">
				<input class="w-full" type="text" name="address" id="address" bind:value={$address.adresa} placeholder="Adresa doručení" />
				<p class="error">{#if errors.address}{errors.address}{/if}</p> 
			</div>
			<div class="flex">
				<input class="w-full" type="text" name="phone" id="phone" bind:value={$address.phone} placeholder="Telefonní číslo" />
				<p class="error">{#if errors.phone}{errors.phone}{/if}</p> 
			</div>
			
			<div class="flex">
				<input class="w-full" type="text" name="email" id="email" bind:value={$address.email} placeholder="E-mailová adresa" />
				<p class="error">{#if errors.email}{errors.email}{/if}</p>
			</div>
			
		</div>
		<div class="mb-4">
			<h3>Zvolte způsob placení:</h3>
			<div class="flex flex-wrap space-x-2">
				{ #each pays as payname (payname) }
				<label>
					<input name="pay select" id="pay" class="peer appearance-none -mr-1" type=radio bind:group={pay} value={payname}>
					<span id="payname" class="opacity-50 peer-checked:opacity-100">{payname}</span>
				</label>
					
       		 {/each}
			</div>	
		</div>
		<div class="mb-4">
			<h3>Vyberte den doručení:</h3>
			<div class="flex flex-wrap space-x-2">
				{ #each days as dayname (dayname) }
					<label>
						<input name="day select" id="day" class="peer appearance-none -mr-1" type=radio bind:group={day} value={dayname}>
						<span id="dayname" class="opacity-50 peer-checked:opacity-100">{dayname}</span>
					</label>		
       			 {/each}	
			</div>
		</div>
		
	</form>
</div>

<div class="hidden">
	<p id="omgday">{day}</p>
	<p id="omgpay">{pay}</p>
</div>

<div id="cart" name="cart" class="hidden">

	{ #each $cart as item }
		{#if item.quantity > 0}
			{item.title}<br>{item.price}{item.quantity}<br>{item.price * item.quantity}<br>
		{/if}
	{/each}
	{total}
</div>

<!-- <div class="mt-8">
	<button type="submit">Register</button>
</div> -->

<div class=""> 
	{#if $address.name && $address.adresa && $address.email && $address.phone && $cart.length > 0}

	<button class="w-full border-t border-gray  bg-green text-white p-4 py-6 leading-tight flex justify-between" on:click={ sendMessage }>
		<p class="actionbar  whitespace-nowrap truncate">
			Potvrdit objednávku
		</p>
	
		<p class="actionbar text-right whitespace-nowrap">
			{total} Kč
		</p>
	</button>

{:else}

<div href="/cart1" class="w-full border-t border-gray bg-red text-white p-4 py-6 leading-tight flex justify-between">
    <p class="actionbar opacity-50 whitespace-nowrap truncate">
        Potvrdit objednávku
    </p>

    <p class="actionbar opacity-50 text-right whitespace-nowrap">
        {total} Kč
    </p>
</div>
    
{/if}
	
</div>

<style>
	input {
		@apply bg-transparent placeholder:opacity-50 placeholder:text-white
	}

	/* h3 {
		@apply mb-4
	} */


	.error {
		@apply text-xs text-yellow w-full text-right
	}
</style>