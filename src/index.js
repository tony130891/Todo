if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

import "./styles.css";
import _ from "lodash";
import { objCreator, todo1 } from "./game";

console.log(todo1);