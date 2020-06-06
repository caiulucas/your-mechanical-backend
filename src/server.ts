import express from 'express';
import { createConnection } from 'typeorm';

const app = express();

createConnection().then(() => {
  app.use(express.json());

  app.get('/', (req, res) => {
    res.json({ msg: 'ok' });
  });

  app.listen(process.env.PORT || 3333);
});
