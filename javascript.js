let library = [];

//  constructor
function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
}


function addBookToLibrary(title, author, read) {
    let b = new Book(title, author, read);
    library.push(b);
}
addBookToLibrary("book1", "author1", "yes");
