<script>
  let cart = [];
  let products = [{
      id: 1,
      name: "Apple",
      image: "🍎",
      price: 10,
      quantity: 1
    },
    {
      id: 2,
      name: "Orange",
      image: "🍊",
      price: 11,
      quantity: 1
    },
    {
      id: 3,
      name: "Grapes",
      image: "🍇",
      price: 12,
      quantity: 1
    },
  ]


  // const addToCart = (product) => {
  //   cart = [...cart, product]
  // }

  const addToCart = (product) => {
    for (let item of cart) {
      if (item.id === product.id) {
        product.quantity += 1
        cart = cart;
        return;
      }
    }
    cart = [...cart, product]
  }
</script>

<div class="product-list">
  {#each products as product}
    <div class="">
      <div class="flex">
        <p>{product.image}</p>
        <h4>{product.name}</h4>
      </div>
     <p>₹{product.price}</p>
     <button on:click={() => addToCart(product)}>Add to cart</button>
    </div>
  {/each}
 </div>

 <div class="cart-list">
  {#each cart as item }
    <div class="cart-item flex">
      <p>{item.image}</p>
      <div>{item.quantity}</div>
      <p>₹{item.price * item.quantity}</p>
    </div>
  {/each}
 </div>
 
 <style>
  .product-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
 </style>