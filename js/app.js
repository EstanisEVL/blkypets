/*--- Saludo al usuario: ----*/
import {greet} from "./greet.js"

// Variables:
let entry = document.getElementById("entry");
let user = document.getElementById("user");
let form = document.getElementById("form");
let main = document.getElementById("main");

form.addEventListener("submit", greet);
