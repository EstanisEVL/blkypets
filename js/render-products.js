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
                            <div class="custom-card" style="width: 25rem">
                                <img src='${product.thumbnail}' class="img-fluid custom-card-img" alt="producto ${product.id}">
                                <div class="custom-card-body">
                                    <h5 class="custom-card-title">${product.title}</h5>
                                    <p class="custom-card-text">Precio: $${product.price}</p>
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