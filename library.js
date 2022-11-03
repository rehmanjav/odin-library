'use strict';

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

// let myLibrary = [{title: "The Count of Monte Cristo",
//                   author: "Alexandre Dumas",
//                   pages: 234,
//                   read: true,
//                  },
//                  {title: "How to make friends and win influence",
//                   author: "Dale Carnegie",
//                   pages: 234,
//                   read: true,
//                  },
//                  {title: "Cracking the coding interview",
//                   author: "Gayle Laakmann McDowell",
//                   pages: 234,
//                   read: false,
//                  },
//                 ];

let myLibrary = [new Book("The Count of Monte Cristo",
                          "Alexandre Dumas",
                          234,
                          true),
                 new Book("How to make friends and win influence",
                          "Dale Carnegie",
                          234,
                          true),
                 new Book("Cracking the coding interview",
                          "Gayle Laakmann McDowell",
                          234,
                          false),
                ];

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
    }

    btnRead.addEventListener('click', function () {
        this.classList.toggle("btn-read-self");
        if (this.textContent == "READ") {
            this.textContent = "UNREAD";
        } else if (this.textContent == "UNREAD") {
            this.textContent = "READ";
        }
    });

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
    btnDelete.setAttribute("data-index", bookIndex);
    btnDelete.textContent = 'DELETE';
    btnDelete.addEventListener('click', function () {
        let bookIndex = +this.getAttribute("data-index");
        myLibrary.splice(bookIndex, 1);
        updateLibrary();
    });

    btnDeleteDiv.appendChild(btnDelete);

    card.appendChild(btnDeleteDiv);

    return card;
}

updateLibrary();

// MODAL CODE

let modal = document.querySelector(".modal");
let opener = document.querySelector(".btn-newBook");
let closer = document.querySelector(".close");
let adder = document.querySelector(".btn-add");

opener.addEventListener('click', function () {
    modal.style.display = "block";
});

closer.addEventListener('click', function () {
    modal.style.display = "none";
});

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

adder.addEventListener('click', function () {
    let inputTitle = document.querySelector("#bookTitle");
    let inputAuthor = document.querySelector("#bookAuthor");
    let inputPages = document.querySelector("#bookPages");
    let radioYes = document.querySelector(".bookYes");
    let radioNo = document.querySelector(".bookNo");

    let bookTitle = inputTitle.value;
    let bookAuthor = inputAuthor.value;
    let bookPages = inputPages.value;
    let bookRead;
    
    if (radioYes.checked) {
        bookRead = true;
    } else {
        bookRead = false;
    }

    if (bookTitle.length >= 1 &&
        bookAuthor.length >= 1 &&
        bookPages.length >= 1) {
            let newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
            myLibrary.push(newBook);
            
            updateLibrary();

            inputTitle.value = "";
            inputAuthor.value = "";
            inputPages.value = "";
            radioNo.checked = true;
            modal.style.display = 'none';
    }

    
});