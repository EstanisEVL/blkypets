// Agregar productos al carrito:
import {cart, renderCart} from "./cart.js";
import {products} from "./render-products.js";

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

export {addToCart};