// DOM LOGIC
const btnPlus = document.querySelector("#btn-Plus")
const dialog = document.querySelector("dialog");

btnPlus.addEventListener("click", () => {
  dialog.showModal();
});

btnSubmit.addEventListener("click", () => {
  let form = document.querySelector("form");
  let formTodo = form.classList.contains("todo");
  let formProject = form.classList.contains("project");

  if (formProject) {
  }
});

export { btnPlus }