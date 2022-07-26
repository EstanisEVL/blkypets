const modalContainer = document.querySelector('.modal-container');
const openCart = document.getElementById("open");
const closeCart = document.getElementById("close");
const modalCart = document.querySelector('.modal-cart');


openCart.addEventListener("click", () => {
    modalContainer.classList.toggle("modal-active");
});
closeCart.addEventListener("click", () => {
    modalContainer.classList.remove("modal-active");
});

modalContainer.addEventListener("click", () => {
    closeCart.click();
});
modalCart.addEventListener("click", (e) => {
    e.stopPropagation();
});
