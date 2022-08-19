// Finalizar compra:
import {products, productContainer, renderProducts} from "./render-products.js";
import {cart, cartContainer, renderCart} from "./cart.js";

const checkout = async () => {
    if(cart != ""){
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
        let params = "width=1000,height=500,left=500,top=250";
        
        window.open(data.init_point, "_blank", params);
        
        emptyCartPurchase();
    }
    else{
        Swal.fire({
            title: 'Oops, el carrito está vacío',
            text: 'Por favor agregá al menos un producto al carrito para comprar.',
        })
    }
}
const emptyCartPurchase = () => {
    cart.length = 0;
    localStorage.removeItem("cart");
    renderCart();
    const div = document.createElement("div");
        div.className = ("product-in-cart");
        div.innerHTML = `
                        <h2 fs-2>¡Gracias por tu compra! Podés agregar más productos si querés realizar otro pedido.</h2>
                        `
        cartContainer.prepend(div);
}

export {checkout};