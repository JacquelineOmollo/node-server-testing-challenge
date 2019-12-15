const bookList = require("./booksModel");
const db = require("../../database/dbConfig");

const request = require("supertest");
const server = require("../api/server");

describe("clear out database on each test", () => {
  beforeEach(async () => {
    await db("books").truncate();
  });
});

describe("books model", () => {
  describe("books", () => {
    it(" should add books with id", async () => {
      await Books.insert({ name: "Cracking Python" });
      await Books.insert({ name: "JavaScript the weird parts" });
      const books = await db("books");
      expect(books).toHaveLength(2);
    });
  });
});
