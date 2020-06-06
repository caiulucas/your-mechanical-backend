const path = require('path');

module.exports = {
  type: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  logging: false,
  migrationsRun: true,

  entities: [path.resolve(__dirname, 'src', 'database', 'entities', '*.ts')],
  migrations: [path.resolve(__dirname, 'src', 'database', 'migrations', '*.ts')],
  cli: {
    entitiesDir: path.resolve(__dirname, 'src', 'database', 'entities'),
    migrationsDir: path.resolve(__dirname, 'src', 'database', 'migrations'),
  },
};
