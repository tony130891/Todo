// DOM LOGIC
const btnPlus = document.querySelector("#btn-Plus")
const dialog = document.querySelector("dialog");
const btnSubmit = document.querySelector(".btn-submit");

btnPlus.addEventListener("click", () => {
  dialog.showModal();
});

btnSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  let form = document.querySelector("form");
  let formTodo = form.classList.contains("todo");
  let formProject = form.classList.contains("project");
  
  if (formProject) { return objProject(title, description)};
  if (formTodo) { return objTodo(title, description, priority, dueDate)};
});

export { btnPlus, btnSubmit }