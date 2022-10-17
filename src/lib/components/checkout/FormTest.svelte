<script>
	import sheetdb from 'sheetdb-node';
	var client = sheetdb({
		address: 'n4q0i0acx1qeo'
	});
	// importing Stores
	import {
		boxcart
	} from "$lib/data/boxcart.js";
	import {
		setcart
	} from "$lib/data/setcart.js";

	import { dage, methods } from "$lib/data/stores.js" 

	import {
		address
	} from "$lib/data/address.js";

	$: boxtotal = $boxcart.reduce((sum, item) => sum + item.price * item.quantity, 0)
	$: settotal = $setcart.reduce((sum, item) => sum + item.price * item.quantity, 0)
	$: boxsumka = $boxcart.reduce((sum, item) => sum + item.quantity, 0)
	$: fulltotal = boxtotal + settotal

	import DateInput from '$lib/components/checkout/DateInput.svelte'
	let date = new Date()

	let selectedDay = '';
	let selectedPay = '';

	async function sendMessage() {
		const today = new Date();
		const options = { weekday: 'short', month: 'short', day: 'numeric' };
		const todayName = today.toLocaleDateString('cs-CS', options);
		let doruc = '';

		if ($boxcart.length === 0) {
			doruc = date.toLocaleDateString('cs-CS', options);
		} else {
			doruc = selectedDay;
		}

		 var params = {
			datum: todayName,
			jmeno: $address.name,
			email: $address.email,
			adresa: $address.adresa,
			tel: $address.phone,
			doruceni: doruc,
			platba: selectedPay,
			obsah: document.getElementById("cart").textContent
		}

		try {
			await client.create(params, "Objednavky")
			.then(window.location.href = "/cart3")

		} catch (err) {
			errors = extractErrors(err);
		}

			// .then(function (data) {
			// 	console.log(data);
			// 	window.location.href = "/cart3";
			// }, function (err) {
			// 	console.log(err);
			// });

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



<div class:bg-green={$address.name && $address.adresa && $address.email && $address.phone && (boxsumka> 4 ||
	$setcart.length > 0)} class="bg-red p-4 flex-1 text-white">

	<form name="contactForm" on:submit|preventDefault={submitHandler}>
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
			<div class=" md:flex flex-wrap md:space-x-2">
				{ #each $methods as method}
				<label class="">
					<input name="pay select" id="pay" class="block peer appearance-none -mr-1" type=radio bind:group={selectedPay} value={method}>
					<span id="payname" class="opacity-50 peer-checked:opacity-100">{method}</span>
				</label>
					
       		 {/each}
			</div>	
		</div>

		{#if $boxcart.length === 0}
			<div class="mb-4">
				<h3>Vyberte datum doručení:</h3>
				<div class="flex flex-wrap space-x-2">
						<DateInput bind:date />
				</div>
			</div>
		{:else}
			<div class="mb-4">
				<h3>Vyberte den doručení:</h3>
				<div class="md:flex flex-wrap md:space-x-2">
					{#each $dage as dag}
						<label>
							<input name="day select" id="day" class="block peer appearance-none -mr-1" type=radio bind:group={selectedDay} value={dag}>
							<span id="dayname" class="opacity-50 peer-checked:opacity-100">{dag}</span>
						</label>	
					{/each}
				</div>
			</div>
		{/if}
		
		
		
	</form>
</div>

<!-- <div class="hidden">
	<p id="omgday">{day}</p>
	<p id="omgpay">{pay}</p>
</div> -->

<div id="cart" name="cart" class="hidden">

<p>&#8203;/{ #each $boxcart as item }{#if item.quantity > 0}
		/ {item.title}: {item.quantity} ks /{/if}
		{/each}
		</p>
	
<p>&#8203;
/{ #each $setcart as item }{#if item.quantity > 0}
		/ {item.title}: {item.quantity} ks /{/if}
		{/each}
	</p>

<p class="underline">
&#8203;
<span>Celkem: {fulltotal}Kč </span>
</p>

</div>

<!-- <div class="mt-8">
	<button type="submit">Register</button>
</div> -->

<div class=""> 
	{#if $address.name && $address.adresa && $address.email && $address.phone && (boxsumka > 4 || $setcart.length > 0)}

	<button class="w-full border-t border-gray  bg-green text-white p-4 py-6 leading-tight flex justify-between" on:click={ sendMessage }>
		<p class="actionbar  whitespace-nowrap truncate">
			Potvrdit objednávku
		</p>
	
		<p class="actionbar text-right whitespace-nowrap">
			{fulltotal} Kč
		</p>
	</button>

{:else}

<div href="/cart1" class="w-full border-t border-gray bg-red text-white p-4 py-6 leading-tight flex justify-between">
    <p class="actionbar opacity-50 whitespace-nowrap truncate">
        Potvrdit objednávku
    </p>

    <p class="actionbar opacity-50 text-right whitespace-nowrap">
        {fulltotal} Kč
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