/* ---- Solicitar usuario para el mensaje de bienvenida ---- */

// Buscar si ya existe un usuario en el localStorage:
document.addEventListener("DOMContentLoaded", e =>{
    const storageUser = JSON.parse(localStorage.getItem("user"));
    const recoverUser = () => {
        user.value = storageUser;
        createMessage();
        entry.remove();
    }
    storageUser && recoverUser();
})

// Funciones:
// Solicitar el ingreso sólo cuando NO existe un usuario almacenado en el localStorage:
const greet = (e) =>{
    e.preventDefault();
    createMessage();
    // Mensaje de bienvenida:
    Swal.fire({
        width: "50rem",
        title: `¡Bienvenid@ a BLKY Pets ${user.value}!`,
        text: 'Tienda líder en accesorios para mascotas.',
        imageUrl: '../images/LogoBLKYpng.png',
        imageAlt: 'BLKY Logo',
    })
    addLocalStorage();
    // Borrar el formulario:
    entry.remove();
}
// Imprimir el saludo al usuario:
const createMessage = () => {
    let greet = document.createElement("h2");
    greet.innerHTML = `<h2>¡Bienvenid@ <span>${user.value}</span>!</h2>`;
    greet.className = "greet";
    main.prepend(greet);
}
// Guardar en localStorage:
const addLocalStorage = () => {
    localStorage.setItem("user", JSON.stringify(user.value));
}

// Variables:
let entry = document.getElementById("entry");
let user = document.getElementById("user");
let main = document.getElementById("main");
let form = document.getElementById("form");

form.addEventListener("submit", greet);

export {greet};