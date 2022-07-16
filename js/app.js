/*--- Simulador de venta de productos: ----*/
// Funciones:
// 1) Solicita un nombre de usuario e imprime el saludo personalizado:
const saludo = usuario => {
    while(true){
        let usuario = prompt("Ingrese su usuario");
        if(usuario != "" && usuario != " " && usuario != null){
            //Saludo
            let h2 = document.createElement("h2");
            h2.innerHTML = `<h2>¡Bienvenido ${usuario}!</h2>`;
            mensaje.append(h2);
            break;
        }else{
            alert("Ingrese un usuario válido");
            continue;
        }
    }
}
// 2) Le olicita al usuario que elija dos productos y los agrega al carrito:
const compra = (eleccion) => {
    for(i=0; i<2; i++){
        let eleccion = parseInt(prompt(`Elija un producto para agregar al carrito (1, 2, 3, 4 o 5): 
        \n 1- ${productos[0].nombre} $${productos[0].precio}\n 2- ${productos[1].nombre} $${productos[1].precio}\n 3- ${productos[2].nombre} $${productos[2].precio}\n 4- ${productos[3].nombre} $${productos[3].precio}\n 5- ${productos[4].nombre} $${productos[4].precio}`));
        if(eleccion === 1){
            carrito.push(new Producto(1, "COLLAR", 2500));
        }else if(eleccion === 2){
            carrito.push(new Producto(2, "CORREA", 3000));
        }else if(eleccion === 3){
            carrito.push(new Producto(3, "CHAPITA", 1000));
        }else if(eleccion === 4){
            carrito.push(new Producto(4, "ARNÉS", 5000));
        }else if(eleccion === 5){
            carrito.push(new Producto(5, "PRETAL", 3500));
        }else{
            alert("Ingrese una opción válida.");
        }
    }
}
// 3) Imprime los productos que se han agregado al carrito:
function cargarCarrito(){
    let compraFinal = document.getElementById("carrito");
    for(const producto of carrito){
        let li = document.createElement("li");
        li.innerHTML = `<p>Producto agregado: </p>
                        <p>Nombre: ${producto.nombre}</p>
                        <p>Precio: $${producto.precio}</p>`;
        compraFinal.append(li);
    }
}
// 4) Calcula el total de la compra y lo muestra debajo del carrito:
let divTotal = document.getElementById("total");
const calculoTotal = () =>{
    const total = carrito.reduce((acumulador, elemento) => acumulador  + elemento.precio, 0);
    let mostrarTotal = document.createElement("h2");
    mostrarTotal.innerHTML = `<p> Total de su compra: $${total}</p>`;
    divTotal.append(mostrarTotal);
}

// Clases, arreglos y variables:
class Producto{
    constructor (id, nombre, precio, cantidad){
        this.id = id;
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.cantidad = parseInt(cantidad);
        this.vendido = false;
    }
    vender(){
        this.vendido = true;
    }
}
const productos = [
    {id: 1, nombre: "COLLAR", precio: 2500, cantidad: 45, vendido: false, img: 'images/Collares.jpg'},
    {id: 2, nombre: "CORREA", precio: 3000, cantidad: 40, vendido: false, img: "images/Correas.jpg"},
    {id: 3, nombre: "CHAPITA", precio: 1000, cantidad: 150, vendido: false, img: "images/DestChapitas.jpg"},
    {id: 4, nombre: "ARNES", precio: 5000, cantidad: 15, vendido: false, img: "images/Arneses.jpg"},
    {id: 5, nombre: "PRETAL", precio: 3500, cantidad: 30, vendido: false, img: "images/Pretales.jpg"},
];
const carrito = [];

let contenedor = document.getElementById("contenedor");

for(const producto of productos){
    let li = document.createElement("li");
    li.innerHTML = `<p> ID: ${producto.id}</p>
                    <p> Nombre: ${producto.nombre}</p>
                    <p> Precio: $${producto.precio}</p>
                    <p> En stock: ${producto.cantidad} unidades.</p>
                    <img class= "img-fluid w-25" src= "${producto.img}">
    `;
    contenedor.append(li);
}

// Código:
saludo();
compra();
cargarCarrito();
calculoTotal();




