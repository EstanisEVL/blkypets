/*--- Modal: ----*/
const mainContainer = document.querySelector(".main-container");
const modalContainer = document.querySelector(".modal-container");
const openCart = document.getElementById("open");
const closeCart = document.getElementById("close");
const cartModal = document.querySelector(".modal-cart");

openCart.addEventListener("click", (e) => {
    e.preventDefault();
    modalContainer.classList.toggle("modal-active");
});
closeCart.addEventListener("click", () => {
    modalContainer.classList.remove("modal-active");
});

modalContainer.addEventListener("click", () => {
    closeCart.click();
});
mainContainer.addEventListener("click", () => {
    closeCart.click();
});

cartModal.addEventListener("click", (e) => {
    e.stopPropagation();
});
