require("dotenv").config();
const { PORT } = process.env;

const express = require("express");

const { ApolloServer } = require("apollo-server-express");
const { resolvers } = require("./resolvers");
const { typeDefs } = require("./typeDefs");
const { connectDB } = require("./config/index");

const app = express();
connectDB();

app.get("/", (req, res) => res.send("Welcome to my API"));

async function start() {
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.listen(PORT, () => console.log("Listen on Port:", PORT));
}

start();

module.exports = app;
