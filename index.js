import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import db from "./_db.js";

// types
import { typeDefs } from "./schema.js";

const resolvers = {
  Query: {
    games: () => {
      return db.games;
    },
    authors: () => {
      return db.authors;
    },
    reviews: () => {
      return db.reviews;
    },
    review: (parent, args, context) => {
      return db.reviews.find((review) => review.id === args.id);
    },
    game: (parent, args, context) => {
      return db.games.find((game) => game.id === args.id);
    },
    author: (parent, args, context) => {
      return db.authors.find((author) => author.id === args.id);
    },
  },
  Game: {
    reviews(parent, args, context) {
      return db.reviews.filter((review) => review.gameId === parent.id);
    },
  },
  Author: {
    reviews(parent, args, context) {
      return db.reviews.filter((review) => review.authorId === parent.id);
    },
  },
  Review: {
    author(parent, args, context) {
      return db.authors.find((author) => author.id === parent.authorId);
    },
    game(parent, args, context) {
      return db.games.find((game) => game.id === parent.gameId);
    },
  },
  Mutation: {
    deleteGame: (parent, args, context) => {
      db.games = db.games.filter((game) => game.id !== args.id);

      return db.games;
    },
    addGame: (parent, args, context) => {
      let game = {
        ...args.game,
        id: Math.floor(Math.random() * 10000).toString(),
      };

      db.games.push(game);
      return game;
    },
    updateGame: (parent, args, context) => {
      db.games = db.games.map((game) => {
        if (game.id === args.id) {
          return { ...game, ...args.edit };
        }
        return game;
      });

      return db.games.find((game) => game.id === args.id);
    },
  },
};

// server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: {
    port: 4000,
  },
});

console.log(`Server ready at port, ${url}`);
