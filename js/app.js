/*--- Simulador de venta de productos: ----*/
import {productos} from "./stock.js";
// import {carritoIndex} from "./carritoIndex.js";

// Funciones:
// 1) Se ingresa el nombre de usuario en el formulario e imprime el saludo en base al usuario ingresado:
function saludo(e){
    e.preventDefault();
    // Crea el saludo personalizado:
    let saludo = document.createElement("h2");
    saludo.innerHTML = `<h2>¡Bienvenid@ <span>${nombre.value}</span>!</h2>`;
    saludo.className = "saludo";
    principal.prepend(saludo);
    // Borra el formulario:
    ingreso.remove();
}

// 2) Muestra productos y permite que el usuario los agregue al carrito:
const contenedorProductos = document.getElementById("contenedor-productos");
const contenedorCarrito = document.getElementById("carrito-contenedor");
const vaciarCarrito = document.getElementById("vaciar-carrito");
const contadorCarrito = document.getElementById("contador-carrito");
const precioTotal = document.getElementById("precio-total");

let carrito = [];
// Vaciar carrito:
vaciarCarrito.addEventListener("click", () => {
    carrito.length = 0;
    actualizarCarrito();
})
// Renderiza los productos:
productos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("tarjeta");
    div.innerHTML = `
                    <div class="tarjeta" style="width: 18rem">
                        <img src='${producto.img}' class="img-fluid card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">Precio: $${producto.precio}</p>
                        <button class="btn btn-dark" id="agregar${producto.id}">COMPRAR</button>
                        </div>
                    </div>
                    `
    contenedorProductos.prepend(div);

    const boton = document.getElementById(`agregar${producto.id}`);
    boton.addEventListener("click", () => {
        agregarAlCarrito(producto.id);
        alert(`¡${producto.nombre} agregado al carrito!`);
    });
})
// Agregar productos al carrito:
const agregarAlCarrito = (productoId) =>{
    const existe = carrito.some(producto => producto.id === productoId);

    if(existe){
        const producto = carrito.map(producto => {
            if(producto.id === productoId){
                producto.cantidad++;
            }
        })
    }else{
        const producto = productos.find((producto) => producto.id === productoId);
        carrito.push(producto);
    }
    actualizarCarrito();
}
// Eliminar productos del carrito:
const eliminarDelCarrito = (productoId) => {
    const producto = carrito.find((producto) => producto.id === productoId);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    actualizarCarrito();
}
// Renderiza el carrito:
const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "";

    carrito.forEach((producto) => {
        const div = document.createElement("div");
        div.className = ("producto-carrito");
        div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio: $${producto.precio}</p>
                        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                        <img src='${producto.img}' class="img-fluid card-img-top w-25" alt="...">
                        <button id="eliminar(${producto.id})" class="boton-eliminar"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg></button>
                        `
        contenedorCarrito.prepend(div);

        const boton = document.getElementById(`eliminar(${producto.id})`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(producto.id);
        });
    });
    contadorCarrito.innerText = carrito.length;
    precioTotal.innerText = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
}

let ingreso = document.getElementById("ingreso");
let nombre = document.getElementById("nombre");
let formulario = document.getElementById("formulario");
let principal = document.getElementById("principal");

formulario.addEventListener("submit", saludo);




