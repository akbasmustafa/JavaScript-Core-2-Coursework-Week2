function shoppingList(arrayOfPeople) {
  let ulTag = document.createElement("ul");
  for (let i = 0; i < arrayOfPeople.length; i++) {
    let liTag = document.createElement("li");
    liTag.textContent = arrayOfPeople[i];
    ulTag.appendChild(liTag);
  }
  let divEl = document.getElementById("content");
  divEl.appendChild(ulTag);
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
