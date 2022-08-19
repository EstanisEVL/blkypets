// Vaciar carrito:
import {cart, renderCart} from "./cart.js";

const emptyCart = document.getElementById("empty-cart");

emptyCart.addEventListener("click", () => {
    Swal.fire({
        title: `¿Estás segur@ de vaciar el carrito?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, vaciar",
        cancelButtonText: "No, no vaciar",
    }).then((result) =>{
        if(result.isConfirmed){
            cart.length = 0;
            localStorage.removeItem("cart");
            renderCart();

            Swal.fire({
                title: "Listo",
                icon: "success",
                text: `¡El carrito está vacío!`,
            });
        }
    })
})

export {emptyCart};