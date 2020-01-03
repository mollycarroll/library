let myLibrary = [];

class Book {
  constructor(title, author, pages, status) {
  this.title = title
  this.author = author
  this.pages = pages
  this.status = status
}
  toggleStatus() {
    this.alreadyRead = !this.alreadyRead;
  }
}

const bookList = document.querySelector('#bookList');
const newFormButton = document.querySelector('#newBookButton');
const form = document.querySelector('#newBookForm');
const addBook = document.querySelector('#addBook');
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const bookPages = document.querySelector('#bookPages');
const bookRead = document.querySelector('#bookRead');

function renderColumn

// source https://lcyne.github.io/top-library/scripts/main.js

function addBookToLibrary() {
    newBook = new Book(title, author, pages, status)
    myLibrary.push(newBook)
    render(newBook)
  }

  var titleText = document.createTextNode(document.getElementById("title").value);
  var authorText = document.createTextNode(document.getElementById("author").value);
  var pagesText = document.createTextNode(document.getElementById("pages").value);

  }

  function render() {
    var newRow = HTMLTableElement.insertRow(-1);
    var newTitle = HTMLTableRowElement.insertCell(0);
    var newAuthor = HTMLTableRowElement.insertCell(1);
    var newPages = HTMLTableRowElement.insertCell(2);
    var newStatus = HTMLTableRowElement.insertCell(3);
  }
