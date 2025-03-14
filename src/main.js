import BookService from "./services/book-service.js";


const bService = new BookService()

const booksPromise = bService.getBooksData();
booksPromise.then(books => displayBooks(books));


function displayBooks(books) {
    console.log(books)
    const container = document.getElementById('books-container');
    container.innerHTML = '';
    for (let i = 0; i < books.length; i++) {
        const book = books[i];

        const bookContainer = document.createElement('a');
        bookContainer.classList.add('book-container');
        bookContainer.href = "/detail.html?id=" + book.id;


       



        const image = document.createElement('img')
        image.src = book.coverImg;
        bookContainer.appendChild(image)
        


        const titleContainer = createTextElement('h3', book.title);
        bookContainer.appendChild(titleContainer);



        container.appendChild(bookContainer);

    }



}

function createTextElement(elementType, text) {
    const element = document.createElement(elementType);
    const node = document.createTextNode(text);
    element.appendChild(node);
    return element;
}
function orderByName() {
    bookService.getBooksByName().then(books => displayBooks(books));
}

window.orderByName = orderByName;

//1) fate la fetch del file json e loggate l'array di libri
//2) create la classe libro e la classe autore
    //-libro: title(string), autors(array di autori), summary(stringa il primo dei summaries, id, subjects (array di stringhe)), coverImage(stringa-url)
    //-Author: name, yob, yod => calcola età
 //3) traducede il dato grezzo in oggetti
 //4) create una visualizzazione di schede libro con i dati disponibili
 //5) mettete un tasto che permetta di mettere in ordine i libri per titolo

