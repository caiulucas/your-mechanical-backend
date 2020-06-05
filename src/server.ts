import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ msg: 'ok' });
});

app.listen(process.env.PORT || 3333);
