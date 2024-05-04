const btnTodo = document.querySelector("#btn-todo");


btnTodo.addEventListener("click", () => {
  const formTodo = document.createElement("div");
  formTodo.className = "inputTodo";
  const input1 = document.createElement("input");
  formTodo.appendChild(input1);
  btnTodo.appendChild(formTodo);
  //inputTodo.replaceChildren(input1)
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
