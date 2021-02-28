function todoList(todos) {
  let ulTag = document.createElement("ul");
  for (let i = 0; i < todos.length; i++) {
    let liTag = document.createElement("li");
    liTag.innerText = todos[i].todo;
    liTag.addEventListener("click", function () {
      let lastDecor = liTag.style.textDecoration;
      if (lastDecor == "line-through") {
        liTag.style.textDecoration = "none";
      } else {
        liTag.style.textDecoration = "line-through";
      }
    });

    ulTag.appendChild(liTag);
  }

  let divEl = document.getElementById("content");
  divEl.appendChild(ulTag);
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
