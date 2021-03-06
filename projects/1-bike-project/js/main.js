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
