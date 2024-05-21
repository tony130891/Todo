if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

import "./styles.css";
import _ from "lodash";
import { format } from "date-fns";
import { objCreator, btnTodo } from "./Object";
import { btnSubmit, btnPlus } from "./home";
import { btnProject, objProject } from "./project";
