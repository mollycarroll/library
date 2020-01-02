let myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title
  this.author = author
  this.pages = pages
  this.status = status
  this.info = function() {
    console.log(title + " by " + author + ", " + status)
  }
}

function addBookToLibrary() {

}
