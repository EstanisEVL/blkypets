/*---- Vaciar carrito: ----*/
import {cart, renderCart} from "./cart.js";

const emptyCart = document.getElementById("empty-cart");

emptyCart.addEventListener("click", () => {
    // Si el carrito no está vacío:
    if(cart !=""){
        // Sweet alert solicitando confirmación del usuario para vaciar el carrito:
        Swal.fire({
            title: `¿Estás segur@ de vaciar el carrito?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Si, vaciar",
            cancelButtonText: "No, no vaciar",
        }).then((result) =>{
            if(result.isConfirmed){
                // Se vacía el carrito:
                cart.length = 0;
                localStorage.removeItem("cart");
                renderCart();
    
                // Sweet alert que informa que el carrito está vacío:
                Swal.fire({
                    title: "Listo",
                    icon: "success",
                    text: `¡El carrito está vacío!`,
                });
            }
        })
    }
    // Si el carrito está vacío:
    else{
        Swal.fire({
            title: "Oops",
            icon: "warning",
            text: `¡El carrito ya está vacío!`,
        });
    }
})

export {emptyCart};