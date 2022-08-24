/*--- Carrito de compras: ----*/
import {removeFromCart} from "./remove-from-cart.js"
import {emptyCart} from "./empty-cart.js"
import {checkout} from "./checkout.js"

// Recuperar carrito del localStorage:
document.addEventListener("DOMContentLoaded", e =>{
    const storageCart = JSON.parse(localStorage.getItem("cart")) || [];
    const recoverCart = () => {
        cart = storageCart;
        renderCart();
    }
    storageCart && recoverCart();
})

// Renderizar el carrito:
const renderCart = () => {
    cartContainer.innerHTML = "";

    cart.forEach((product) => {
        const div = document.createElement("div");
        div.className = ("product-in-cart");
        div.innerHTML = `
                        <img src='${product.thumbnail}' class="img-fluid card-img-top"         alt="miniatura ${product.title}">
                        <p>${product.title.split(" ")[0]} ${product.title.split(" ")[1]} ${product.title.split(" ")[2]}...</p>
                        <p>Precio: $${product.price}</p>
                        <p id="quantity${product.id}">Cantidad: ${product.quantity}</p>
                        <button id="remove(${product.id})" class="remove--button" title="Quitar producto"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg></button>
                        `
        cartContainer.prepend(div);

        const button = document.getElementById(`remove(${product.id})`);
        button.addEventListener("click", () => {
            removeFromCart(product.id);
        });
    });
    // Contador del carrito:
    cartCounter.innerText = cart.reduce((acc, product) => acc + product.quantity, 0);

    // Calculo del precio total:
    fullPrice.innerText = cart.reduce((acc, product) => acc + (product.price * product.quantity), 0);

    // Guardar carrito en localStorage:
    addLocalStorage();
}

// Guardar carrito en localStorage:
const addLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Variables:
let cart = [];

const cartContainer = document.getElementById("cart-container");
const cartCounter = document.getElementById("cart-counter");
const fullPrice = document.getElementById("full-price");
const buy = document.getElementById("buy");

buy.addEventListener("click", checkout);

export {cart, cartContainer, renderCart};
