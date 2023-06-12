// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const config = require("./config");
console.log(">>>", config.env.host);
module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: config.env.host,
      port: 3306,
      user: config.env.user,
      password: config.env.password,
      database: config.env.database,
    },
    pool: {
      min: 2,
      max: 10,
    },
  },

  staging: {
    client: "mysql",
    connection: {
      host: config.env.host,
      port: 3306,
      user: config.env.user,
      password: config.env.password,
      database: config.env.database,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "mysql",
    connection: {
      host: config.env.host,
      port: 3306,
      user: config.env.user,
      password: config.env.password,
      database: config.env.database,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
