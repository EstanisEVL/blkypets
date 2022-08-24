/* ---- Agregar productos al carrito ---- */
import {cart, renderCart} from "./cart.js";
import {products} from "./render-products.js";

const addToCart = (productId) =>{
    const exists = cart.some(product => product.id === productId);

    // Si el producto ya existe en el carrito:
    const mapProduct = () => {
        const product = cart.map(product => {
            const addQuantity = () => {
                product.quantity++;

                // Mensaje de producto agregado al carrito:
                Swal.fire({
                    width: "50rem",
                    title: "¡Genial!",
                    imageUrl: `${product.thumbnail}`,
                    text: `¡Se ha agregado ${product.title.split(" ")[0]} ${product.title.split(" ")[1]} ${product.title.split(" ")[2]}... al carrito!`,
                    icon: 'success',
                    showConfirmButton: true
                })
                return null;
            }
            product.id === productId && addQuantity();
        })
    }
    // Si el producto no existe en el carrito:
    const addProduct = () => {
        const product = products.find((product) => product.id === productId);
        cart.push(product);
        product.quantity = 1;

        // Mensaje de producto agregado al carrito:
        Swal.fire({
            width: "50rem",
            title: "¡Genial!",
            imageUrl: `${product.thumbnail}`,
            text: `¡Se ha agregado ${product.title.split(" ")[0]} ${product.title.split(" ")[1]} ${product.title.split(" ")[2]}... al carrito!`,
            icon: 'success',
            showConfirmButton: true
        })
    }

    exists ? mapProduct() : addProduct();

    renderCart();
}

export {addToCart};