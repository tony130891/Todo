// DOM LOGIC
const btnSubmit = document.querySelector(".btn-submit");
let form = document.querySelector("form");
const btnPlus = document.querySelector("#btn-Plus");

btnPlus.addEventListener("click", () => {
  const favDialog = document.querySelector("#favDialog");

  if (favDialog.style.display === "none") {
    favDialog.style.display = "block";
  } else {
    favDialog.style.display = "none";
  }
});

btnSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  let formTodo = form.classList.contains("todo");
  let formProject = form.classList.contains("project");
  
  
});


export { btnSubmit, btnPlus }