const btn = document.querySelector("#btn-todo");

btn.addEventListener("click", () => {
  const form = document.querySelector(".todo")

   if (form.style.display === "none") {
     // 👇️ this SHOWS the form
     form.style.display = "block";
   } else {
     // 👇️ this HIDES the form
     form.style.display = "none";
   }
})

export { btn }