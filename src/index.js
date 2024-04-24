if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

import "./styles.css";
import _ from "lodash";
import { objCreator } from "./game";

const form = document.querySelector(".todo");
const inputTitle = document.querySelector("#title");
let title = inputTitle.value;

const todo1 = objCreator(title, "contact clients", "Monday", "email them");

console.log(todo1);
console.log(form);