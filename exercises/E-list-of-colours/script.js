// * Create a `<select>` element.
// * Create a `<p>` element.
// * Iterate through the array of colours.
// * Each element in the array should add a `<option>` to the `<select>`, where the `<option>` is the element in the array.
// * Each `<option>` should have a 'click' event listener to update the contents and colour of the `<p>` with the selected colour.
// * All of your HTML should go inside the `<div>` with the id **"content"**.

function listOfColours(colours) {
  let selectTag = document.createElement("select");
  let content = document.getElementById("content");
  let pTag = document.createElement("p");
  colours.forEach((color) => {
    let optionTag = document.createElement("option");
    optionTag.textContent = color;
    selectTag.appendChild(optionTag);

    selectTag.addEventListener("change", function () {
      content.style.backgroundColor = selectTag.value;
    });
  });

  content.appendChild(selectTag);
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
