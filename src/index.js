import { GraphQLServer } from "graphql-yoga";
import { typeDefs } from "./graphql/typesDEF";
import { resolvers } from "./graphql/resolver";

const server = new GraphQLServer({
    typeDefs, 
    resolvers
});

server.start({port: 3000}, ({port}) => {
    console.log('Server is running in the port', port);
});