// export default class BookService {
    
//     constructor() {
//     }

//     getBooksData() {
    
//         const booksPromise = fetch("/assets/books.json")
//              .then(resp => resp.json())
//              .then(data => {
               
//                  console.log(books);
                
//              })
//              .catch(error => console.log(error))
     
     
//      }
// }
 
 


import Book from "../model/book.js";
import Author from "../model/author.js";


class BookService {

    constructor(){}

    getBooksData(){
         return fetch("/assets/books.json")
        .then(resp => resp.json())
        .then(data => {
            const books = this.fromRawDataToBooks(data);


            return books;
        })
        .catch(err => console.log(err))
    }

    fromRawDataToBooks(booksData){

        const books = [];

        for (let i = 0; i < booksData.length; i++) {
            const data = booksData[i];

            const id = data.id
            const title = data.title
            const authors = this.createAuthors(data.authors)
            const summary = data.summaries[0]
            const subjects = data.subjects;
            const coverImg = data.formats['image/jpeg']


            const newBook = new Book(id, title, authors, summary, subjects, coverImg);

            books.push(newBook)

        }

        return books;
    }

    createAuthors(authorsData){
        const authors = [];

        for (let i = 0; i < authorsData.length; i++) {
            const data = authorsData[i];

            const name = data.name;
            const yob = data.birth_year;
            const yod = data.birth_year;


            const newAuth = new Author(name, yob, yod);

            authors.push(newAuth)

        }

        return authors;
    }

    getBooksByName() {
        return this.getBooksData().then(books => {
            const booksClone = books.slice()
            booksClone.sort((b1, b2) => b1.compareByName(b2))
            return booksClone;
        });
    }

    getBookFromId(id) {
        return this.getBooksData().then(books => {
            return books.find(book => book.id === id);
        });
    }

}



export default BookService;