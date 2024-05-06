const btnTodo = document.querySelector("#btn-todo");
const dialog = document.querySelector("dialog");

btnTodo.addEventListener("click", () => {
  const formTodo = document.createElement("form");
  formTodo.setAttribute("method", "Dialog");
  formTodo.className = "formTodo";
  const title = document.createElement("input");
  title.setAttribute("type", "text");
  title.setAttribute("name", "title");
  title.setAttribute("id", "title");
  title.setAttribute("placeholder", "Title");
  dialog.appendChild(formTodo);
  formTodo.appendChild(title);
  //inputTodo.replaceChildren(title)
})

function objCreator(title, description, priority, dueDate) {
  return {
    title,
    description,
    priority,
    dueDate,
  };
}

export { objCreator, btnTodo };
