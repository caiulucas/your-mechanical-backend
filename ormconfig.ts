// eslint-disable-next-line no-unused-vars
import { ConnectionOptions } from 'typeorm';
import path from 'path';

const options: ConnectionOptions = {
  type: 'sqlite',
  database: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),

  cli: {
    entitiesDir: path.resolve(__dirname, 'src', 'database', 'entities'),
  },
};

export default options;
