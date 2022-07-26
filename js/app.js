/*--- Saludo al usuario: ----*/
// Se ingresa el nombre de usuario en el formulario e imprime el saludo en base al usuario ingresado:
// Variables del formulario de ingreso:
let entry = document.getElementById("entry");
let user = document.getElementById("user");
let form = document.getElementById("form");
let main = document.getElementById("main");

form.addEventListener("submit", greet);
function greet(e){
    e.preventDefault();
    // Crea el saludo personalizado:
    let greet = document.createElement("h2");
    greet.innerHTML = `<h2>¡Bienvenid@ <span>${user.value}</span>!</h2>`;
    greet.className = "greet";
    main.prepend(greet);
    // addLocalStorage();
    // Borra el formulario:
    entry.remove();
}

// const addLocalStorage = () => {
// localStorage.setItem("greet", user.value);
// }

// window.onload = function(){
//     const storage = localStorage.getItem("greet");
//     if(storage){
//         user.value = storage;
        
//     }
// }