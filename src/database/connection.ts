import { createConnection } from 'typeorm';

require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

async function startConnection() {
  await createConnection();
}

startConnection();
