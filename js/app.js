/*--- Simulador de venta de productos: ----*/
import {productos} from "./stock.js";
import {carritoIndex} from "./carritoIndex.js";

// Funciones:
// 1) Se ingresa el nombre de usuario en el formulario e imprime el saludo en base al usuario ingresado:
function saludo(e){
    e.preventDefault();
    // Crea el saludo personalizado:
    let saludo = document.createElement("h2");
    saludo.innerHTML = `<h2>¡Bienvenido <span>${nombre.value}</span>!</h2>`;
    saludo.className = "saludo";
    principal.prepend(saludo);
    // Borra el formulario:
    ingreso.remove();
}

// 2) Muestra productos y permite que el usuario los agregue al carrito:
const compra = (productos) => {
    const contenedorProductos = document.getElementById("contenedor-productos");
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("tarjeta");
        div.innerHTML += `
                        <div class="tarjeta" style="width: 18rem">
                            <img src='${producto.img}' class="img-fluid card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">Precio: $${producto.precio}</p>
                                <button class="btn btn-dark" id=boton${producto.id}>COMPRAR</button>
                            </div>
                        </div>
                        `;
        contenedorProductos.prepend(div);

        const boton = document.getElementById(`boton${producto.id}`);

        boton.addEventListener('click', () => {
            carritoIndex(producto.id);
            alert(`¡${producto.nombre} agregado al carrito!`);
            let contadorProducto = getElementById("contador-carrito");
            contadorProducto.innerHTML = `<p>0+${producto.cantidad}</p>`;
        });
    });
}


// const compra = (eleccion) => {
//     for(i=0; i<2; i++){
//         let eleccion = parseInt(prompt(`Elija un producto para agregar al carrito (1, 2, 3, 4 o 5): 
//         \n 1- ${productos[0].nombre} $${productos[0].precio}\n 2- ${productos[1].nombre} $${productos[1].precio}\n 3- ${productos[2].nombre} $${productos[2].precio}\n 4- ${productos[3].nombre} $${productos[3].precio}\n 5- ${productos[4].nombre} $${productos[4].precio}`));
//         if(eleccion === 1){
//             carrito.push(new Producto(1, "COLLAR", 2500));
//         }else if(eleccion === 2){
//             carrito.push(new Producto(2, "CORREA", 3000));
//         }else if(eleccion === 3){
//             carrito.push(new Producto(3, "CHAPITA", 1000));
//         }else if(eleccion === 4){
//             carrito.push(new Producto(4, "ARNÉS", 5000));
//         }else if(eleccion === 5){
//             carrito.push(new Producto(5, "PRETAL", 3500));
//         }else{
//             alert("Ingrese una opción válida.");
//         }
//     }
// }

// 3) Imprime los productos que se han agregado al carrito:
// function cargarCarrito(){
//     let compraFinal = document.getElementById("carrito");
//     for(const producto of carrito){
//         let li = document.createElement("li");
//         li.innerHTML = `<p>Producto agregado: </p>
//                         <p>Nombre: ${producto.nombre}</p>
//                         <p>Precio: $${producto.precio}</p>`;
//         compraFinal.append(li);
//     }
// }

// 4) Calcula el total de la compra y lo muestra debajo del carrito:
// let divTotal = document.getElementById("total");
// const calculoTotal = () =>{
//     const total = carrito.reduce((acumulador, elemento) => acumulador  + elemento.precio, 0);
//     let mostrarTotal = document.createElement("h2");
//     mostrarTotal.innerHTML = `<p> Total de su compra: $${total}</p>`;
//     divTotal.append(mostrarTotal);
// }

// Clases, arreglos y variables:
let ingreso = document.getElementById("ingreso");
let nombre = document.getElementById("nombre");
let formulario = document.getElementById("formulario");
let principal = document.getElementById("principal");

formulario.addEventListener("submit", saludo);
// let contenedor = document.getElementById("contenedor");

// for(const producto of productos){
//     let li = document.createElement("li");
//     li.innerHTML = `<p> ID: ${producto.id}</p>
//                     <p> Nombre: ${producto.nombre}</p>
//                     <p> Precio: $${producto.precio}</p>
//                     <p> En stock: ${producto.cantidad} unidades.</p>
//                     <img class= "img-fluid w-25" src= "${producto.img}">
//     `;
//     contenedor.append(li);
// }

// Código:
// saludo();
compra(productos);
// calculoTotal();




