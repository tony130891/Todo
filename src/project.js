const btnProject = document.querySelector("#btn-project");
const dialog = document.querySelector("dialog");
const inputProject = ["Project Title", "Description"];

function objProject(title, description) {
  return {
    title,
    description,
  };
}

btnProject.addEventListener("click", () => {
  const formTodo = document.createElement("form");
  formTodo.setAttribute("method", "Dialog");
  formTodo.className = "formproject";
  dialog.appendChild(formTodo);

  for (let i = 0; i < inputProject.length; i++) {
    let input = document.createElement("input");
    input.className = "inputProject";
    input.placeholder = inputProject[i];
    formTodo.appendChild(input);
  }
});

export { btnProject, objProject };
