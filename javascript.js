let library = [
    {title:"Lord of the Rings", author:"J.R.R. Tolkien", status:"Read"},
    {title:"Pokemon", author: "Ash Ketchum", status:"Read"},
    {title:"Harry Potter", author:"JK Rowling", status:"Not Read"}
];

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const stat = document.querySelector("#status");
const form = document.querySelector("form");
const table = document.querySelector("#table");

class Book {
    constructor(title, author, status) {
        this.title = title;
        this.author = author;
        this.status = status;
    }
}

//  book adding form function
let addBookToLibrary = (e) => {
    e.preventDefault(); //  stops form from refreshing page

    //  checks if user added input values
    if(!title.value || !author.value) {
        alert("Please Fill In All Fields");
        return false;
    }

    const newBook = new Book(title.value, author.value, stat.value);
    library.push(newBook);

    let str = '<tr><th>Title</th><th>Author</th><th>Status</th></tr>'
    library.forEach(element => {
        str += '<tr><td>' + element.title + "</td><td>" + element.author + "</td><td>" + element.status + "</td><td><button class='remove'>x</button></td></tr>"
    });

    table.innerHTML = str;
    document.querySelector("form").reset(); //  resets inputs
};

//  prints book + adds button next to each segment
let str = '<tr><th>Title</th><th>Author</th><th>Status</th></tr>'
library.forEach(element => {
    str += '<tr><td>' + element.title + "</td><td>" + element.author + "</td><td>" + element.status + "</td><td><button class='remove'>X</button></td></tr>"
});

table.innerHTML = str;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submit-btn").addEventListener("click", addBookToLibrary);
});