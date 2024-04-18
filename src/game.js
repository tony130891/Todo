function objCreator(title, description, dueDate, note) {
  return {
    title,
    description,
    dueDate,
    note,
  };
}

const todo1 = objCreator("work", "contact clients", "Monday", "email them");

export { objCreator, todo1 }

// DOM logic Properties CHECK(boolean) AND PRIORITY([low,high,urgent])