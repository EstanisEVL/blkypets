/* ---- Renderizar productos ----*/
import {addToCart} from "./add-to-cart.js"

document.addEventListener("DOMContentLoaded", e =>{
    renderProducts();
})

// Renderizar productos desde la api de Mercado Libre:
const renderProducts = async () => {
    try{
        const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?seller_id=241170043`);
        const data = await response.json();

        products.push(...data.results);

        products.forEach((product) => {
            const div = document.createElement("div");
            div.classList.add("custom-card");

            div.innerHTML = `
                            <div class="custom-card-content" style="width: 25rem">
                                <img src='${product.thumbnail}' class="img-fluid custom-card-img" alt="producto ${product.id}">
                                <div class="custom-card-body">
                                    <h5 class="custom-card-title">${product.title}</h5>
                                    <p class="custom-card-text">Precio: $${product.price}</p>
                                    <button class="buy--button" id="add${product.id}">AGREGAR AL <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg></button>
                                </div>
                            </div>
                            `
            
            productContainer.prepend(div);
            
            const button = document.getElementById(`add${product.id}`);
            
            button.addEventListener("click", () => {
                addToCart(product.id);
            });
        }); 
    }catch{
        // Imprimir mensaje de error en el DOM:
        let div = document.createElement("div");
        div.innerHTML = `
                        <h2>Error al renderizar el catálogo</h2>
                        `
        
        productContainer.prepend(div);
    }
}

// Variables:
let products = [];
const productContainer = document.getElementById("product-container");

export {products, productContainer, renderProducts};