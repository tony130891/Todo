if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

import "./styles.css";
import _ from "lodash";
import { objCreator, input1 } from "./Object";
import { btnPlus } from "./home";
import { input2 } from "./project";

const btnTodo = document.querySelector("#btn-todo");
const btnProject = document.querySelector("#btn-project");
const inputTodo = document.querySelector(".inputTodo");
const inputProject = document.querySelector(".inputProject");


btnTodo.addEventListener("click", () => {
  inputTodo.replaceChildren(input1)
})

btnProject.addEventListener("click", () => {
  inputProject.replaceChildren(input2);
});