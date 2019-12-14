bookList = require("./booksModel");
db = require("../database/dbConfig");

const request = require("supertest");
const server = require("../api/server");

describe("get all books", () => {
  describe("books", () => {
    it(" should return status code 200 and list all books", async () => {
      const expectedBody = { bookList };
    });
  });
});
