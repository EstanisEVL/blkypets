import {productos} from "./stock.js";

let carrito = [];

export const carritoIndex = (productoId) => {
    
    const contenedorCarrito = document.getElementById("carrito-contenedor");

    const renderProductosDelCarrito = () => {
        let producto = productos.find(producto => producto.id == productoId);
        carrito.push(producto);
    
        producto.cantidad = 1;

        let div = document.createElement('div');
        div.classList.add("producto-carrito");
        div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio: $${producto.precio}</p>
                        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                        <img src='${producto.img}' class="img-fluid card-img-top w-25" alt="...">
                        <button id="eliminar${producto.id}" class="boton-eliminar"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg></button>
                        `
    
        contenedorCarrito.appendChild(div);
    }
    renderProductosDelCarrito();
}