function showForm() {
  document.getElementById('newBookForm').style.display = "block";
}

let myLibrary = [];

function Book() {
  this.title = title
  this.author = author
  this.pages = pages
  this.status = status
}

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
