function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  list.innerHTML = null;
  todos.forEach((obj) => {
    let liEl = document.createElement("li");
    let spanEl = document.createElement("span");
    let iDeleteEl = document.createElement("i");
    let iDoneEl = document.createElement("i");
    iDoneEl.className = "fa fa-check";
    iDeleteEl.className = "fa fa-trash";
    spanEl.className = "badge bg-primary rounded-pill";
    spanEl.appendChild(iDoneEl);
    spanEl.appendChild(iDeleteEl);
    liEl.className =
      "list-group-item d-flex justify-content-between align-items-center";
    liEl.textContent = obj.task;
    liEl.appendChild(spanEl);
    liEl.style.textDecoration = obj.completed ? "line-through" : "none";
    list.appendChild(liEl);
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: true },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  //let btn = document.querySelector('form button')
  let input = document.getElementById("todoInput");
  todos.push({
    task: input.value,
    completed: false,
  });
  input.value = "";
  populateTodoList(todos);
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  let lists = document.getElementById("todo-list").childNodes;
  lists.forEach((liEl) =>
    liEl.style.textDecoration === "line-through" ? liEl.remove() : null
  );
}
