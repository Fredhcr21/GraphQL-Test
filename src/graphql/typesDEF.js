export const typeDefs = `
    type Query {
        ping: String!
        books: [Book!]!
        authors: [Author!]!
        reviews: [Review!]!
    }

    type Book {
        id: ID!
        title: String!
        description: String!
        author: Author!
        reviews: [Review!]!
    }

    type Author {
        id: ID!
        name: String!
        books: [Book!]!
    }

    type Review {
        id: ID!
        text: String!
        book: Book!
    }
`;