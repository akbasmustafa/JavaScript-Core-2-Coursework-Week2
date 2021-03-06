// - When clicking **blue** it should change:

//   - **Jumbotron** background color to `#588fbd`
//   - **Donate a bike** button background color to `#ffa500`
//   - **Volunteer** button background color to `black` and text color to `white`

// - When clicking **orange** it should change:

//   - **Jumbotron** background color to `#f0ad4e`
//   - **Donate a bike** button background color to `#5751fd`
//   - **Volunteer** button background color to `#31b0d5` and text color to `white`

// - When clicking **green** it should change:
//   - **Jumbotron** background color to `#87ca8a`
//   - **Donate a bike** button background color to `black`
//   - **Volunteer** button background color to `#8c9c08`

const btnBlue = document.getElementById("blueBtn");
btnBlue.addEventListener("click", function () {
  document.querySelector(".Jumbotron").style.backgroundColor = "#588fbd";
  let btnEls = document.querySelectorAll(".buttons a");
  btnEls[0].style.backgroundColor = "#ffa500";
  btnEls[1].style.backgroundColor = "black";
  btnEls[1].style.color = "white";
});

const btnOrange = document.getElementById("orangeBtn");
btnOrange.addEventListener("click", function () {
  document.querySelector(".Jumbotron").style.backgroundColor = "#f0ad4e";
  let btnEls = document.querySelectorAll(".buttons a");
  btnEls[0].style.backgroundColor = "#5751fd";
  btnEls[1].style.backgroundColor = "#31b0d5";
  btnEls[1].style.color = "white";
});

const btnGreen = document.getElementById("greenBtn");
btnGreen.addEventListener("click", function () {
  document.querySelector(".Jumbotron").style.backgroundColor = "#87ca8a";
  let btnEls = document.querySelectorAll(".buttons a");
  btnEls[0].style.backgroundColor = "black";
  btnEls[1].style.backgroundColor = "#8c9c08";
});

// Just below the buttons, there's a form called **Register with us**.

// Continue working in `./js/main.js` to add the following functionality:

// When the submit button is pressed, it should check that all the form fields are valid:

// - The **Your name**, **Email** and **Describe yourself** fields need to be non-empty (Hint: their `value` length has to be greater than zero)
// - For the **Email** field also check if it contains the `@` character

// For all the fields that invalid, it should make their background color `red`.
// IF all the fields are valid, when you click **Submit** it should:

// - Display an alert to thank you for filling out the form
// - Blank out (make empty) all the text fields

// **Important hint:** In your function that handles clicks on the `Submit` button you will need to call
// `event.preventDefault()` to stop the browser from refreshing the page.
//  To read more on how to do this: https://developer.mozilla.org/en/docs/Web/API/Event/preventDefault

let btnEl = document.querySelector("form button");
console.log(btnEl.innerHTML);
btnEl.addEventListener("click", function (e) {
  e.preventDefault();
  alert("hello");

  let email = document.getElementById("exampleInputEmail1");
  let name = document.getElementById("example-text-input");
  let about = document.getElementById("exampleTextarea");

  if (
    email.value.length === 0 ||
    name.value.length === 0 ||
    about.value.length === 0 ||
    !email.value.includes("@")
  ) {
    email.style.backgroundColor = "red";
    setTimeout(() => (email.style.backgroundColor = "white"), 3000);
  } else {
    alert("thank you for filling out the form");
    email.value = "";
    about.value = "";
    name.value = "";
  }
});
