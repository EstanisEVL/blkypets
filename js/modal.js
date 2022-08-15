/*--- Modal: ----*/
const modalContainer = document.querySelector('.modal-container');
const openCart = document.getElementById("open");
const closeCart = document.getElementById("close");
const modalCart = document.querySelector('.modal-cart');

openCart.addEventListener("click", (e) => {
    e.preventDefault();
    modalContainer.classList.toggle("modal-active");
});
closeCart.addEventListener("click", () => {
    modalContainer.classList.remove("modal-active");
});

// Carrito no cierra cuando clickeo fuera de él. ARREGLAR!
modalContainer.addEventListener("click", () => {
    closeCart.click();
});
modalCart.addEventListener("click", (e) => {
    e.stopPropagation();
});
