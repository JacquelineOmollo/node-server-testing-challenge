const db = require("../../database/dbConfig");

module.exports = {
  add,
  update,
  remove,
  getAll,
  findById
};

async function add(books) {
  const [id] = await db("books").insert(books, "id");

  return db("books")
    .where({ id })
    .first();
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db("hobbits");
}

function findById(id) {
  return null;
}
