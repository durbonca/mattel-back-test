/* const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgre',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
}); */

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfdv9mha6gdiguui9bsg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'test_seql'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'JZXor5IU6FXikjZNAzFiF6FigJhNGrhN'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
