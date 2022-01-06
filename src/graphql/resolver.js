import { books } from "../database/books"
import { authors } from "../database/authors";
import { reviews } from "../database/reviews";

export const resolvers = {
    
    Query: {
        ping() {
            return 'pong'
        },
        books() {
            return books;
        },
        authors() {
            return authors;
        },
        reviews() {
            return reviews;
        }
    },
    Book: {
        author: ({author}) => {
            return authors.find(auth => {
                return auth.id === author
            }) 
        },
        reviews: (parent) => {
            return reviews.filter(review => {
                return review.book === parent.id
            })
        }
    },
    Author: {
        books(parent) {
            return books.filter(book => {
                return book.author === parent.id;
            })
        }
    },
    Review: {
        books (parent) {
            return books.find(book => {
                return book.id === parent.book
            })
        }
    }
    
}