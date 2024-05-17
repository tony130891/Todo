const btnTodo = document.querySelector("#btn-todo");
const dialog = document.querySelector("dialog");

btnTodo.addEventListener("click", () => {
  const formTodo = document.createElement("form");
  formTodo.setAttribute("method", "Dialog");
  formTodo.className = "formtodo";
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
  dueDate.textContent = "Due Date:";
  formTodo.appendChild(dueDate);
  const calendar = document.createElement("input");
  calendar.setAttribute("type", "date");
  calendar.setAttribute("id", "calendarInput");
  dueDate.appendChild(calendar);

  const priority = document.createElement("p");
  priority.textContent = "Priority level:";
  formTodo.appendChild(priority);

  const priorityArr = ["Urgent", "Low", "Not urgent"];

  const priorityList = document.createElement("select");
  priorityList.id = "priorityList";
  priority.appendChild(priorityList);

  //Create and append the options
  for (let i = 0; i < priorityArr.length; i++) {
    let option = document.createElement("option");
    option.value = priorityArr[i];
    option.text = priorityArr[i];
    priorityList.appendChild(option);
  }
});

function objTodo(title, description, priority, dueDate) {
  return {
    title,
    description,
    priority,
    dueDate,
  };
}

export { objTodo, btnTodo };
