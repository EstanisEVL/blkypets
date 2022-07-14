/*--- Simulador de venta de productos: ----*/
// Funciones:
// 1) Solicitar nombre de usuario y saludo:
const saludo = usuario => {
    while(true){
        let usuario = prompt("Ingrese su usuario");
        if(usuario != "" && usuario != " " && usuario != null){
            //Saludo
            alert(`¡Bienvenido ${usuario}!`);
            break;
        }else{
            alert("Ingrese un usuario válido");
            continue;
        }
    }
}
// 2) Le muestra al usuario el catálogo de productos y le permite elegir entre buscar productos por nombre y por precio, o filtrar por valor máximo:
const catalogo = () => {
    let operador = parseInt(prompt(`\n Elija una operación (Escriba 1, 2, 3 o 4): \n 1. Buscar precio del producto por nombre. \n 2. Buscar nombre del producto por precio. \n 3. Filtrar por valor máximo. \n 4. ESC.
    \n Catálogo: \n ${productos[0].nombre} - $${productos[0].precio}\n ${productos[1].nombre} - $${productos[1].precio}\n ${productos[2].nombre} - $${productos[2].precio}\n ${productos[3].nombre} - $${productos[3].precio}\n ${productos[4].nombre} - $${productos[4].precio}`));
    // Buscar por nombre:
    if(operador === 1){
        let nombre = prompt("Elejiste: Buscar precio del producto por nombre. \nIngresá el nombre del producto cuyo precio quieras buscar:").toUpperCase();
        if(nombre){
            let productoBuscadoNombre = productos.find(producto => producto.nombre === nombre);
            alert(`Nombre del producto: ${productoBuscadoNombre.nombre} - Precio del producto: $${productoBuscadoNombre.precio}`);
        }
    // Buscar por precio:
    }else if(operador === 2){
        let precio = parseInt(prompt("Elejiste: Buscar nombre del producto por precio. \nIngresá el precio del producto cuyo nombre quieras buscar:"));
        if(!isNaN(precio)){
            let productoBuscadoPrecio = productos.find(producto => producto.precio === precio);
            alert(`Precio ingresado: $${productoBuscadoPrecio.precio} - Producto a ese precio: ${productoBuscadoPrecio.nombre}`);
        }
    // Filtrar por valor máximo:
    }else if(operador === 3){
        let valor = parseInt(prompt("Ingresá un valor máximo:"));
        const productoFiltrado = productos.filter(producto => producto.precio < valor);
        // Para corregir: que se vea el grupo de productos filtrados por alert:
        alert(`${productoFiltrado}`);
    // Salir:
    }else if(operador === 4){
        alert("¡Gracias por tu visita!");
    // Error:
    }else{
        alert("Ingrese una operación válida.");
    }
}
// 3) Solicita que el usuario elija dos productos, los agrega al carrito y los devuelve por alert:
const compra = (eleccion) => {
    for(i=0; i<2; i++){
        let eleccion = parseInt(prompt(`Elija un producto para agregar al carrito: 
        \n 1- ${productos[0].nombre} $${productos[0].precio}\n 2- ${productos[1].nombre} $${productos[1].precio}\n 3- ${productos[2].nombre} $${productos[2].precio}\n 4- ${productos[3].nombre} $${productos[3].precio}\n 5- ${productos[4].nombre} $${productos[4].precio}`));
        if(eleccion === 1){
            carrito.push(new Producto(1, "Collar", 2500));
            alert(`${productos[0].nombre} agregado al carrito!`);
            // break;
        }else if(eleccion === 2){
            carrito.push(new Producto(2, "Correa", 3000));
            alert(`${productos[1].nombre} agregada al carrito!`);
            // break;
        }else if(eleccion === 3){
            carrito.push(new Producto(3, "Chapita", 1000));
            alert(`${productos[2].nombre} agregada al carrito!`);
            // break;
        }else if(eleccion === 4){
            carrito.push(new Producto(4, "Arnés", 5000));
            alert(`${productos[3].nombre} agregado al carrito!`);
            // break;
        }else if(eleccion === 5){
            carrito.push(new Producto(5, "Pretal", 3500));
            alert(`${productos[4].nombre} agregado al carrito!`);
            // break;
        }else{
            alert("Ingrese una opción válida.");
        }
    }
    // Devuelve los productos agregados al carrito:
    alert(`Resumen de su compra: \n 1) ${carrito[0].nombre} \n 2) ${carrito[1].nombre}`);
}
// 4) Calcula el total de la compra:
const calculoTotal = () =>{
    const total = carrito.reduce((acumulador, elemento) => acumulador  + elemento.precio, 0);
    alert(`Total de su compra: $${total}`);
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
    {id: 1, nombre: "COLLAR", precio: 2500, cantidad: 45, vendido: false},
    {id: 2, nombre: "CORREA", precio: 3000, cantidad: 40, vendido: false},
    {id: 3, nombre: "CHAPITA", precio: 1000, cantidad: 150, vendido: false},
    {id: 4, nombre: "ARNES", precio: 5000, cantidad: 15, vendido: false},
    {id: 5, nombre: "PRETAL", precio: 3500, cantidad: 30, vendido: false},
];
const carrito = [];
// Código:
saludo();
catalogo();
compra();
calculoTotal();



