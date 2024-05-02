// DOM LOGIC
const btnPlus = document.querySelector("#btn-Plus")
const btnTodo = document.querySelector("#btn-todo");
const dialog = document.querySelector("dialog");


btnPlus.addEventListener("click", () => {
  dialog.showModal();
});

btnTodo.addEventListener("click", () => {
  const form = document.querySelector(".todo")

   if (form.style.display === "none") {
     // 👇️ this SHOWS the form
     form.style.display = "block";
   } else {
     // 👇️ this HIDES the form
     form.style.display = "none";
   }
})

export { btnTodo, btnPlus }