/*--- Finalizar compra: ----*/
import {cart, cartContainer, renderCart} from "./cart.js";

const checkout = async () => {
    // Si el carrito no está vacío:
    if(cart != ""){
        // Mensaje agradeciendo por la compra e informando la redirección a la página de pago:
        Swal.fire({
            width: "50rem",
            title: '¡Gracias por tu compra!',
            text: 'En breve serás redirigido a la plataforma de pago.',
            imageUrl: '../images/logo0.png',
            imageAlt: 'BLKY PETS compra',
        })
        
        // Crea un nuevo elemento con las propiedades a enviar a la API de pago:
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
    
        // Petición a la API de MercadoPago:
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
    
        // Se abre la página de pago en una nueva ventana:
        let params = "width=1000,height=500,left=500,top=250";

        window.open(data.init_point, "_blank", params);
        
        // Se elimina el contenido del carrito tras la compra:
        emptyCartPurchase();
    }
    // Si el carrito está vacío:
    else{
        Swal.fire({
            width: "50rem",
            title: 'Oops, el carrito está vacío',
            icon: "warning",
            text: 'Por favor agregá al menos un producto al carrito para comprar.',
        })
    }
}

// Vaciar carrito después de la compra:
const emptyCartPurchase = () => {
    cart.length = 0;
    localStorage.removeItem("cart");
    renderCart();

    // Imprimir mensaje de agradecimiento por la compra en el modal del carrito:
    const div = document.createElement("div");
    div.className = ("after-purchase");
    div.innerHTML = `
                    <h2>¡Gracias por tu compra!</h2>
                    <p>Tu pedido fue confirmado. Si querés hacer otra compra volvé a agregar productos al carrito.</p>
                    `
    cartContainer.prepend(div);
}

export {checkout};