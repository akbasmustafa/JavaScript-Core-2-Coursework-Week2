function readingList(books) {
  let ulTag = document.createElement("ul");
  for (let i = 0; i < books.length; i++) {
    let liTag = document.createElement("li");
    let pTag = document.createElement("p");
    pTag.innerHTML = books[i].title + ", " + books[i].author;

    let imgTag = document.createElement("img");
    imgTag.style.width = "100px";
    imgTag.style.height = "140px";
    imgTag.src = imgSrc[i];

    liTag.appendChild(pTag);
    liTag.appendChild(imgTag);
    liTag.style.backgroundColor = books[i].alreadyRead ? "green" : "red";
    liTag.style.width = "200px";

    ulTag.appendChild(liTag);
  }

  let divEl = document.getElementById("content");
  divEl.appendChild(ulTag);
}

const imgSrc = [
  "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/tpp20.jpg",
];

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
  },
];

readingList(books);
