let library = [
    {title:"Lord of the Rings", author:"J.R.R. Tolkien", status:"Read"},
    {title:"Pokemon", author: "Ash Ketchum", status:"Read"},
    {title:"Harry Potter", author:"JK Rowling", status:"Not Read"}
];

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const stat = document.querySelector("#status");
const form = document.querySelector("form");

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

    let str = ''
    let i = 0
    library.forEach(element => {
        str += '<li>' + element.title + " " + element.author + " " + element.status + " <button class='removeBtn'>Remove</button></li>"
    });

    document.getElementById("bookList").innerHTML = str;
    document.querySelector("form").reset(); //  resets inputs
};



//  prints book + adds button next to each segment
let str = ''
let i = 0
library.forEach(element => {
    str += '<li>' + element.title + " " + element.author + " " + element.status + " <button class='remove'>Remove</button></li>"
});

document.getElementById("bookList").innerHTML = str;


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submit-btn").addEventListener("click", addBookToLibrary);
});

