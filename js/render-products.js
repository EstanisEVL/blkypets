/* ---- Renderizar productos ----*/
import {cart, renderCart} from "./cart.js"

document.addEventListener("DOMContentLoaded", e =>{
    // // e.preventDefault();
    // const storageCart = JSON.parse(localStorage.getItem("cart")) || [];
    // const recoverCart = () => {
    //     cart = storageCart;
    //     renderCart();
    // }
    // storageCart && recoverCart();
    renderProducts();
})

export const renderProducts = async () =>{
    try{
        const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?seller_id=241170043`);
        const data = await response.json();

        products.push(...data.results);

        products.forEach((product) => {
            const div = document.createElement("div");
            div.classList.add("custom--card");

            div.innerHTML = `
                            <div class="custom--card" style="width: 25rem">
                                <img src='${product.thumbnail}' class="img-fluid card--img" alt="producto ${product.id}">
                                <div class="card-body">
                                    <h5 class="card-title fs-2">${product.title}</h5>
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
        }); 
    // Agregar productos al carrito:
        const addToCart = (productId) =>{

            const exists = cart.some(product => product.id === productId);
        
            const mapProduct = () => {
                const product = cart.map(product => {
                    const addQuantity = () => {
                        product.quantity++;

                        Swal.fire({
                            title: "¡Genial!",
                            text: `¡${product.title} agregad@ al carrito!`,
                            icon: 'success',
                            showConfirmButton: true,
                            timer: 2000,
                            timerProgressBar: true,
                        })
                        return null;
                    }
                    product.id === productId && addQuantity();
                })
            }
            const addProduct = () => {
                const product = products.find((product) => product.id === productId);
                cart.push(product);
                product.quantity = 1;

                Swal.fire({
                    title: "¡Genial!",
                    text: `¡${product.title} agregad@ al carrito!`,
                    icon: 'success',
                    showConfirmButton: true,
                    timer: 2500,
                    timerProgressBar: true,
                })
            }
            exists ? mapProduct() : addProduct();

            renderCart();
        }
    }catch(error){
        // Imprimir mensaje de error en el DOM:
        const div = document.createElement("div");
        div.innerHTML = `
                        <h2>Error al renderizar el catálogo</h2>
                        `
        
        productContainer.prepend(div);
    }
}

// Variables:
const productContainer = document.getElementById("product-container");
let products = [];
