knex = require("knex");
config = require("../../knexfile");

const environment = process.env.DB_ENV || "development";

module.reports = knex(config[environment]);
