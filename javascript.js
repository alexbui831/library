let library = [
    {title:"Lord of the Rings", author:"J.R.R. Tolkien", read:"Read"},
    {title:"Pokemon", author: "Ash Ketchum", read:"Read"},
    {title:"Harry Potter", author:"JK Rowling", read:"Not Read"}
];

//  prints book + adds button next to each segment
let str = ''
let i = 0
library.forEach(element => {
    str += '<li>' + element.title + " " + element.author + " " + element.read + " <button class='remove'>Remove</button></li>"
});

document.getElementById("bookList").innerHTML = str;

//  book adding form function
let addBookToLibrary = (e) => {
    e.preventDefault(); //  stops form from refreshing page
    
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const choice = document.getElementById("yes");

    //  checks if read choice is selected or not
    if(choice.checked) { 
        console.log("Read")

        let book = {
            title: document.getElementById("title").value,
            author: document.getElementById("author").value,
            read: "Read"
        };

        library.push(book);
    }
    
    else {
        console.log("Not Read")

        let book = {
            title: document.getElementById("title").value,
            author: document.getElementById("author").value,
            read: "Not Read"
        };

        library.push(book);
    };

    let str = ''
    let i = 0
    library.forEach(element => {
        str += '<li>' + element.title + " " + element.author + " " + element.read + " <button class='removeBtn'>Remove</button></li>"
    });

    document.getElementById("bookList").innerHTML = str;
    document.querySelector("form").reset(); //  resets inputs
};

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submit-btn").addEventListener("click", addBookToLibrary);
});


//  remove book button function
let removeBook = (e) => {
    console.log("remove")
}

const bookList = document.getElementById("bookList");

