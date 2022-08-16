/*--- Filtros de búsqueda: ----*/
import {products, renderCart} from "./cart.js"
import {renderProducts} from "./render-products.js";

const search = document.getElementById("search");
const button = document.getElementById("search-button");
const result = document.getElementById("product-container");
const colorFilter = document.querySelector(".color--filter");

// Filtrar por nombre:
const filterByName = () => {
    result.innerHTML = "";
    const userText = search.value.toLowerCase();

    for(let product of products){
        let name = product.title.toLowerCase();

        const printResult = () => {
            result.innerHTML += `
            <div class="custom--card" style="width: 25rem">
                <img src='${product.thumbnail}' class="img-fluid card--img" alt="producto ${product.id}">
                <div class="card-body">
                    <h5 class="card-title fs-2">${product.title}</h5>
                    <p class="card-text fs-4">Precio: $${product.price}</p>
                    <button class="buy--button" id="add${product.id}">COMPRAR</button>
                </div>
            </div>
            `
            const buyButton = document.getElementById(`add${product.id}`);

            buyButton.addEventListener("click", () => {
                addToCart(product.id);
            });
            
            
            
        }
        name.indexOf(userText) !== -1 && printResult();

    }

    const printNoResult = () => {
        result.innerHTML += `<h3>Producto no encontrado...</h3>`
    }
    result.innerHTML === "" && printNoResult();
}
button.addEventListener("click", filterByName);
search.addEventListener("keyup", filterByName);

// Agregar productos al carrito:
const addToCart = (productId) =>{

    const exists = cart.some(product => product.id === productId);

    const mapProduct = () => {
        const product = cart.map(product => {
            const addQuantity = () => {
                product.quantity++;

                Swal.fire({
                    title: "¡Genial!",
                    text: `¡${product.name} agregad@ al carrito!`,
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
            text: `¡${product.name} agregad@ al carrito!`,
            icon: 'success',
            showConfirmButton: true,
            timer: 2500,
            timerProgressBar: true,
        })
    }
    exists ? mapProduct() : addProduct();

    renderCart();
}

// Filtrar por color (product.color):
const filterByColor = () => {
    let colors = ["todos", ...new Set(products.map((product) => product.color))];
    
    colorFilter.innerHTML = colors.map((color) =>{
        return `<button class="btn--colorFilter">${color}</button>`
    }).join("");
    
    colorFilter.addEventListener("click", function(e){
        const element = e.target;
        const elementCheck = element.classList.contains("btn--colorFilter");

        const filterByColor = () =>{
            let newCart = [];
            let contentCheck = element.textContent === "todos";

            const allFilter = () => {
                newCart = [...products];
                console.log(newCart);
                // Imprimir resultado acá
            }

            const oneColorFilter = () => {
                newCart = products.filter((product) => product.color === element.textContent);
                console.log(newCart);
                // Imprimir resultado acá
            }
                
            contentCheck ? allFilter() : oneColorFilter();
        }
        elementCheck && filterByColor();

        // display(newStore.getElement(".product-container"));
        
        // }
    })
}

filterByColor();

// INTEGRAR LOS RESULTADOS AL CARRITO

// Filtrar por precio máximo y mínimo:
const priceInput = document.querySelector(".price--filter");
const priceValue = document.querySelector(".price--value");

const setupPrice = () => {
    
    let maxPrice = products.map(product => product.price);
    maxPrice = Math.max(...maxPrice);

    priceInput.value = maxPrice;
    priceInput.max = maxPrice;
    priceInput.min = 0;
    priceValue.textContent = `Precio: $${maxPrice}`;

    priceInput.addEventListener("input", function(){
        const value = parseInt(priceInput.value);
        priceValue.textContent = `Precio: $${value}`;
        let cartFilteredByPrice = cart.filter((product) => product.price <= value);

        // Adaptar la funcion renderCart para aplicar el filtro:
        // displayFunction(newCart, getElement(".product-container"))


        // Si no hay nada para mostrar:
        // if(newCart.length < 1){
        //      const products = getElement(".product-container");
        //      productos.innerHTML = `<h3>Producto no encontrado...</h3>`
        // }
    })
}

setupPrice();