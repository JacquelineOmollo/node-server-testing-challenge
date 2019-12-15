exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("books")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("books").insert([
        { name: "Grokking Algorithms" },
        { name: "Cracking the Code" },
        { name: "JavaScript the weird parts" },
        { name: "Cracking Python" }
      ]);
    });
};
