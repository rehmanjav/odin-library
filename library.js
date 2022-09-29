'use strict';

let myLibrary = [{title: "The Count of Monte Cristo",
                  author: "Alexandre Dumas",
                  pages: 234,
                  read: true,
                 },
                 {title: "How to make friends and win influence",
                  author: "Dale Carnegie",
                  pages: 234,
                  read: true,
                 },
                 {title: "Cracking the coding interview",
                  author: "Gayle Laakmann McDowell",
                  pages: 234,
                  read: false,
                 },
                ];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let bookTitle = prompt("Please enter book title.");
    let bookAuthor = prompt("Please enter book author.");
    let bookPages = +prompt("Please enter number of pages.");
    let bookRead = prompt("Have you read this book? (Enter true or false).");

    let newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    myLibrary.push(newBook);
    updateLibrary();
}

function updateLibrary() {
    // 

}

updateLibrary();