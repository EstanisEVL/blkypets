// Clase:
// class Producto{
//     constructor (id, nombre, precio, cantidad){
//         this.id = id;
//         this.nombre = nombre;
//         this.precio = parseInt(precio);
//         this.cantidad = parseInt(cantidad);
//         this.vendido = false;
//     }
//     vender(){
//         this.vendido = true;
//     }
// }
// Arreglo:
const productos = [
    {
        id: 1,
        nombre: "COLLAR",
        precio: 2500,
        cantidad: 1,
        img: 'images/Collares.jpg'
    },
    {
        id: 2,
        nombre: "CORREA",
        precio: 3000,
        cantidad: 1,
        img: 'images/Correas.jpg'
    },
    {
        id: 3,
        nombre: "CHAPITA",
        precio: 1000,
        cantidad: 1,
        img: 'images/DestChapitas.jpg'
    },
    {
        id: 4,
        nombre: "ARNES",
        precio: 5000,
        cantidad: 1,
        img: 'images/Arneses.jpg'
    },
    {
        id: 5,
        nombre: "PRETAL",
        precio: 3500,
        cantidad: 1,
        img: 'images/Pretales.jpg'
    },
];

export{productos};