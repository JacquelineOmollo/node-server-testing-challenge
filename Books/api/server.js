const express = require("express");
const Books = require("../bookList/booksModel");
const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "running" });
});

server.get("/books", (req, res) => {
  Books.getAll()
    .then(books => {
      res.status(200).json(books);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
