import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.status(201).send({
    message: 'Hello World!',
  });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
