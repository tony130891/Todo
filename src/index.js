if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

import "./styles.css";
import _ from "lodash";
import { objCreator } from "./game";
import { btn } from "./DOM";

const form = document.querySelector(".todo");
