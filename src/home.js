// DOM LOGIC
const btnPlus = document.querySelector("#btn-Plus")
const dialog = document.querySelector("dialog");

btnPlus.addEventListener("click", () => {
  dialog.showModal();
});


export { btnPlus }