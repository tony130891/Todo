const btnProject = document.querySelector("#btn-project");

btnProject.addEventListener("click", () => {
  const formProject = document.createElement("div");
  formProject.className = "inputProject";
  const input2 = document.createElement("input");
  formProject.appendChild(input2);
  btnProject.appendChild(formProject);
  //inputProject.replaceChildren(input2);
});

export { btnProject };
