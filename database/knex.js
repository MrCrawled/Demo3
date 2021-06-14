const knex = require("knex")
const config = require("../knexfile")

let db = null
db = knex(config.development)


module.exports = db