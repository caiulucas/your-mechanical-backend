import express from 'express';
import { createConnection } from 'typeorm';

require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const app = express();

async function startServer() {
  await createConnection();

  app.use(express.json());

  app.get('/', (req, res) => {
    res.json({ msg: 'ok' });
  });

  app.listen(process.env.PORT || 3333);
}

startServer();
