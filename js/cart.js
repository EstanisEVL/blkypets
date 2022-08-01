/*--- Carrito de compras: ----*/
import {products} from "./stock.js";

// Funciones:
// Renderizar productos:
const renderProducts = () =>{
    products.forEach((product) => {
        const div = document.createElement("div");
        div.classList.add("custom--card");
        div.innerHTML = `
                        <div class="custom--card" style="width: 25rem">
                            <img src='${product.img}' class="img-fluid card-img-top card--img" alt="...">
                            <div class="card-body">
                                <h5 class="card-title fs-2">${product.name}</h5>
                                <p class="card-text fs-4">Precio: $${product.price}</p>
                                <button class="buy--button" id="add${product.id}">COMPRAR</button>
                            </div>
                        </div>
                        `
        productContainer.prepend(div);
    
        const button = document.getElementById(`add${product.id}`);
        button.addEventListener("click", () => {
            addToCart(product.id);
        });
    })
}
// Renderizar el carrito:
const renderCart = () => {
    cartContainer.innerHTML = "";

    cart.forEach((product) => {
        const div = document.createElement("div");
        div.className = ("product-in-cart");
        div.innerHTML = `<p>${product.name}</p>
                        <p>Precio: $${product.price}</p>
                        <p id="cantidad${product.id}">Cantidad: ${product.quantity}</p>
                        <img src='${product.img}' class="img-fluid card-img-top w-25" alt="...">
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

    // Cálcular precio total:
    fullPrice.innerText = cart.reduce((acc, product) => acc + (product.price * product.quantity), 0);

    // Guardar el carrito en local storage:
    addLocalStorage();
}
// Agregar productos al carrito:
const addToCart = (productId) =>{
    
    const exists = cart.some(product => product.id === productId);
    
    const mapProduct = () => {
        const product = cart.map(product => {
            const addQuantity = () => {
                product.quantity++;
                return null;
            }
            // Operador lógico AND:
            product.id === productId && addQuantity();
        })
    }
    const addProduct = () => {
        const product = products.find((product) => product.id === productId);
        cart.push(product);
        product.quantity = 1;
    }
    // Operadores terciarios:
    exists ? mapProduct() : addProduct();
    renderCart();
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
            // Operador lógico AND:
            product.id === productId && subtractQuantity();
        })
    }
    const removeSpare = () => {
        const index = cart.indexOf(product);
        cart.splice(index, 1);
    }
    // Operadores terciarios:
    (exists && (product.quantity > 1)) ? removeByOne() : removeSpare();
    renderCart();
}
// Local Storage:
const addLocalStorage = () => {
localStorage.setItem("cart", JSON.stringify(cart));
}
window.onload = function(e){
    e.preventDefault();
    // Operador lógico OR:
    const storageCart = JSON.parse(localStorage.getItem("cart")) || [];
    const recoverCart = () => {
        cart = storageCart;
        renderCart();
    }
    // Operador lógico AND:
    storageCart && recoverCart();
}

// Variables:
const productContainer = document.getElementById("product-container");
const cartContainer = document.getElementById("cart-container");
const emptyCart = document.getElementById("empty-cart");
const cartCounter = document.getElementById("cart-counter");
const fullPrice = document.getElementById("full-price");

let cart = [];

// Vaciar carrito:
emptyCart.addEventListener("click", () => {
    // cart = [];
    cart.length = 0;
    localStorage.clear();
    renderCart();
})

// Código:
renderProducts();