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

  const description = document.createElement("input");
  description.setAttribute("type", "text");
  description.setAttribute("name", "description");
  description.setAttribute("id", "description");
  description.setAttribute("placeholder", "description");
  formTodo.appendChild(description);

  const dueDate = document.createElement("p");
  dueDate.textContent = "Due Date:"
  formTodo.appendChild(dueDate)

  const priority = document.createElement("p");
  priority.textContent = "Priority level:"
  formTodo.appendChild(priority);
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
