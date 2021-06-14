// Update with your config settings.
const migrations = {
  directory: './database/migrations',
  tableName: 'knex_migrations'
}

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: "./database/gestiondeturno.sqlite"

    },
    migrations,
    seeds,
    useNullAsDefault: true,

  },
}