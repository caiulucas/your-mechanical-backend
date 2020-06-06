import { createConnection, getConnection } from 'typeorm';

require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

export default {
  async create() {
    await createConnection();
  },

  async close() {
    await getConnection().close();
  },
};
