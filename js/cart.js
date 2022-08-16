/*--- Carrito de compras: ----*/
document.addEventListener("DOMContentLoaded", e =>{
    // e.preventDefault();
    const storageCart = JSON.parse(localStorage.getItem("cart")) || [];
    const recoverCart = () => {
        cart = storageCart;
        renderCart();
    }
    storageCart && recoverCart();
    
    // renderProducts();

    // Ver de agregar las funciones de localstorage acá!
})

// Renderizar el carrito:
const renderCart = () => {
    cartContainer.innerHTML = "";

    cart.forEach((product) => {
        const div = document.createElement("div");
        div.className = ("product-in-cart");
        div.innerHTML = `<p>${product.title}</p>
                        <p>Precio: $${product.price}</p>
                        <p id="cantidad${product.id}">Cantidad: ${product.quantity}</p>
                        <img src='${product.thumbnail}' class="img-fluid card-img-top w-25" alt="...">
                        <button id="remove(${product.id})" class="remove--button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg></button>
                        `
        cartContainer.prepend(div);

        const button = document.getElementById(`remove(${product.id})`);
        button.addEventListener("click", () => {
            removeFromCart(product.id);
        });
    });
    // Contador del carrito:
    cartCounter.innerText = cart.reduce((acc, product) => acc + product.quantity, 0);

    // Calcular precio total:
    fullPrice.innerText = cart.reduce((acc, product) => acc + (product.price * product.quantity), 0);

    // Guardar el carrito en local storage:
    addLocalStorage();
}

// Eliminar productos del carrito:
const removeFromCart = (productId) => {
    const exists = cart.some(product => product.id === productId);
    const product = cart.find((product) => product.id === productId);

    const removeByOne = () => {
        const product = cart.map(product => {
            const subtractQuantity = () =>{
                product.quantity--;
                return null;
            }
            product.id === productId && subtractQuantity();
        })
    }
    const removeSpare = () => {
        const index = cart.indexOf(product);
        cart.splice(index, 1);
    }
    (exists && (product.quantity > 1)) ? removeByOne() : removeSpare();
    renderCart();
}




const cartContainer = document.getElementById("cart-container");
const emptyCart = document.getElementById("empty-cart");
const buy = document.getElementById("buy");
const cartCounter = document.getElementById("cart-counter");
const fullPrice = document.getElementById("full-price");

let products = [];
let cart = [];

// Vaciar carrito:
emptyCart.addEventListener("click", () => {
    Swal.fire({
        title: `¿Estás segur@ de vaciar el carrito?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, vaciar",
        cancelButtonText: "No, no vaciar",
    }).then((result) =>{
        if(result.isConfirmed){
            cart.length = 0;
            localStorage.removeItem("cart");
            renderCart();

            Swal.fire({
                title: "Listo",
                icon: "success",
                text: `¡El carrito está vacío!`,
            });
        }
    })
})

// Finalizar compra:
const checkout = async () => {
    Swal.fire({
        title: '¡Gracias por tu compra!',
        text: 'En breve serás redirigido a la plataforma de pago.',
        imageUrl: '../images/logo0.png',
        imageAlt: 'BLKY PETS compra',
    })

    const productsToMap = cart.map(element => {
        let newElement = {
            title: element.title,
            description: element.attributes,
            picture_url: element.thumbnail,
            category_id: element.category_id,
            quantity: element.quantity,
            currency_id: "ARS",
            unit_price: element.price
        }
        return newElement;
    }) 

    let response = await fetch("https://api.mercadopago.com/checkout/preferences", {
        method: "POST",
        headers: {
            Authorization: "Bearer TEST-1096348196128667-081313-6c8f5ec60cb252fcc2b5636704f3ec6c-241170043"
        },
        body: JSON.stringify({
            items: productsToMap
        })
    })

    let data = await response.json();
    
    window.open(data.init_point, "_blank");
    
    emptyCartPurchase();
}
const emptyCartPurchase = () => {
    cart.length = 0;
    localStorage.removeItem("cart");
    renderCart();
    const div = document.createElement("div");
        div.className = ("product-in-cart");
        div.innerHTML = `
                        <h2 fs-2>¡Gracias por tu compra! Refrescá la página para realizar otro pedido.</h2>
                        `
        cartContainer.prepend(div);
}

// Agregar condición de que haya productos en el carrito para activar!
buy.addEventListener("click", checkout)
// Local Storage:
const addLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// BORRAR después de agregar más datos al llamado
// curl -X POST \
//       'https://api.mercadopago.com/checkout/preferences' \
//       -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
//       -H 'Content-Type: application/json' \ 
//       -d '{
//   "items": [
//     {
//       "title": "Dummy Title",
//       "description": "Dummy description",
//       "picture_url": "http://www.myapp.com/myimage.jpg",
//       "category_id": "car_electronics",
//       "quantity": 1,
//       "currency_id": "U$",
//       "unit_price": 10
//     }
//   ],
//   "payer": {
//     "phone": {},
//     "identification": {},
//     "address": {}
//   },
//   "payment_methods": {
//     "excluded_payment_methods": [
//       {}
//     ],
//     "excluded_payment_types": [
//       {}
//     ]
//   },
//   "shipments": {
//     "free_methods": [
//       {}
//     ],
//     "receiver_address": {}
//   },
//   "back_urls": {},
//   "differential_pricing": {},
//   "tracks": [
//     {
//       "type": "google_ad"
//     }
//   ],
//   "metadata": {}
// }'

export {products, cart, renderCart};
