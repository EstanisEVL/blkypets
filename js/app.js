/*--- Saludo al usuario: ----*/
// Se ingresa el nombre de usuario en el formulario e imprime el saludo en base al usuario ingresado:
// Funciones:
const greet = (e) =>{
    e.preventDefault();
    // Crea el saludo personalizado:
    let greet = document.createElement("h2");
    greet.innerHTML = `<h2>¡Bienvenid@ <span>${user.value}</span>!</h2>`;
    greet.className = "greet";
    main.prepend(greet);
    // Borra el formulario:
    entry.remove();
}

// Variables:
let entry = document.getElementById("entry");
let user = document.getElementById("user");
let form = document.getElementById("form");
let main = document.getElementById("main");

form.addEventListener("submit", greet);