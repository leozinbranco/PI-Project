// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : 'localhost',
      port : 3306,
      user : 'remote',
      password : '12345678',
      database : 'pi_database'  
    },
    pool: {
      min: 2,
      max: 10
    },
  },

  staging: {
    client: 'mysql',
    connection: {
      host : 'localhost',
      port : 3306,
      user : 'remote',
      password : '12345678',
      database : 'pi_database'  
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host : 'localhost',
      port : 3306,
      user : 'remote',
      password : '12345678',
      database : 'pi_database'  
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
