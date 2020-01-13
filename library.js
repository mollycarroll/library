let myLibrary = [];

const libraryTable = document.querySelector("htmlLibraryTable");

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary() {

    let newTitle = document.querySelector("#title").value;
    let newAuthor = document.querySelector("#author").value;
    let newPages = document.querySelector("#pages").value;
    let newStatus = document.querySelector("#status").value;

    let newBook = new Book(newTitle, newAuthor, newPages, newStatus);

    let row = table.insertRow(1);
    
    for (c = 0; c < 5; c++) {
        let cell = row.insertCell(c);
    }

    cell[0].innerHTML = newTitle;
    cell[1].innerHTML = newAuthor;
    cell[2].innerHTML = newPages;
    cell[3].innerHTML = newStatus;
    
}

const submitButton = document.querySelector("#submit").addEventListener("click", addBookToLibrary);