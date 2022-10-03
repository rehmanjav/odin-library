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
    let cardContainer = document.querySelector(".card-container");
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.firstChild);
    }

    for (let i = 0; i < myLibrary.length; i++) {
        let bookIndex = i;
        let bookTitle = myLibrary[i]["title"];
        let bookAuthor = myLibrary[i]["author"];
        let bookPages = myLibrary[i]["pages"];
        let bookRead = myLibrary[i]["read"];

        let newCard = generateCard(bookTitle, bookAuthor, bookPages, bookRead, bookIndex);

        cardContainer.appendChild(newCard);

    }
}

function generateCard(bookTitle, bookAuthor, bookPages, bookRead, bookIndex) {
    let card = document.createElement('div');
    card.classList.add("card");
    card.setAttribute("data-index", bookIndex);

    // Read button div
    let btnReadDiv = document.createElement('div');
    btnReadDiv.classList.add("btn-read");

    let btnRead = document.createElement('button');
    if (bookRead == true) {
        btnRead.textContent = 'READ';
        btnRead.classList.add("btn-read-self");

    } else {
        btnRead.textContent = "UNREAD";
        btnRead.classList.add("btn-unread-self");
    }

    btnReadDiv.appendChild(btnRead);

    card.appendChild(btnReadDiv);

    // Book details div
    let bookDetailsDiv = document.createElement('div');
    bookDetailsDiv.classList.add("book-details");

    let titleP = document.createElement('p');
    titleP.classList.add("book-title");
    titleP.textContent = `${bookTitle}`;
    bookDetailsDiv.appendChild(titleP);

    let authorP = document.createElement('p');
    authorP.classList.add("book-author");
    authorP.textContent = `By: ${bookAuthor}`;
    bookDetailsDiv.appendChild(authorP);

    let pagesP = document.createElement('p');
    pagesP.classList.add("book-pages");
    pagesP.textContent = `Pages: ${bookPages}`;
    bookDetailsDiv.appendChild(pagesP);

    card.appendChild(bookDetailsDiv);

    // Delete div
    let btnDeleteDiv = document.createElement('div');
    btnDeleteDiv.classList.add("btn-delete");

    let btnDelete = document.createElement('button');
    btnDelete.textContent = 'DELETE';

    btnDeleteDiv.appendChild(btnDelete);

    card.appendChild(btnDeleteDiv);

    return card;
}

updateLibrary();