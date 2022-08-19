document.addEventListener("DOMContentLoaded", e =>{
    const storageUser = JSON.parse(localStorage.getItem("user"));
    const recoverUser = () => {
        user.value = storageUser;
        createMessage();
        entry.remove();
    }
    storageUser && recoverUser();
})

// Se solicita el ingreso sólo cuando no existe un usuario almacenado en el localStorage:
const greet = (e) =>{
    e.preventDefault();
    createMessage();
    // Alerta:
    Swal.fire({
        title: `¡Bienvenid@ a BLKY Pets ${user.value}!`,
        text: 'Tienda líder en accesorios para mascotas.',
        
        // Corregir rutas de imágen para que aparezcan en las distintas secciones sin romperse:
        imageUrl: '../images/LogoBLKYpng.png',
        imageAlt: 'BLKY Logo',
    })
    addLocalStorage();
    // Borra el formulario:
    entry.remove();
}

// Crea el saludo personalizado:
const createMessage = () => {
    let greet = document.createElement("h2");
    greet.innerHTML = `<h2>¡Bienvenid@ <span>${user.value}</span>!</h2>`;
    greet.className = "greet";
    main.prepend(greet);
}
// Guarda en localStorage:
const addLocalStorage = () => {
    localStorage.setItem("user", JSON.stringify(user.value));
}

export {greet};