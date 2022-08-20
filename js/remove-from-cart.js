// Eliminar productos del carrito:
import {cart, renderCart} from "./cart.js";

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

export {removeFromCart};