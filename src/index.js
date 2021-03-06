import GraphQLServer from "graphql-yoga";

// 1
const typeDefs = `
type Query {
  info: String!
}
`;

// 2
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`
  }
};

// 3
const server = new GraphQLServer({
  typeDefs,
  resolvers
});

// eslint-disable-next-line no-console
server.start(() => console.log(`Server is running on http://localhost:4000`));
