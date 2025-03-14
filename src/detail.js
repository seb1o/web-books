import BookService from "./services/book-service.js";


const queryParams = new URLSearchParams(window.location.search);

console.log(queryParams);

const idString = queryParams.get('id')

console.log(idString);

const id = parseInt(idString, 10);

console.log(id);

const bService = new BookService();

bService.getBookFromId(id).then(book => renderBook(book))

function renderBook(book) {
    console.log(book);
    const container = document.getElementById('detail-container');

    const titleElement = createTextElement('h1', book.title)

    container.appendChild(titleElement)

    const summaryElement = createTextElement('p', book.summary)

    container.appendChild(summaryElement)
}


function createTextElement(elementType, text) {
    const element = document.createElement(elementType);
    const node = document.createTextNode(text);
    element.appendChild(node);
    return element;
}