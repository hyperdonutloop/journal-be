// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/journal.db3',
      timezone: 'pst',
      datestrings: true,
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done) // turn on FK enforcement
      }
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
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
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password',
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

// module.exports = {
//   development: {
//     client: 'postgresql',
//     connection: "DEV_URL",
//     pool: {
//       min: 2,
//       max: 10,
//       afterCreate: function (conn, cb) {
//         conn.query('SET timezone="UTC";', function (err) {
//           cb(err, conn);
//         });
//       }
//     },
//     migrations: {
//       directory: __dirname + "/db/migrations",
//       tableName: 'knex_migrations'
//     },
//     seeds: {
//       directory: __dirname + "/db/seeds/development"
//     }
//   },

//   production: {
//     client: 'postgresql',
//     connection: "PROD_URL",
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       directory: __dirname + "/db/migrations",
//       tableName: 'knex_migrations'
//     },
//     seeds: {
//       directory: __dirname + "/db/seeds/production"
//     }
//   }
// };
