import express from 'express';
import products from './data/product.js';
import dotenv from 'dotenv';
dotenv.config(); //make sure to configure before we use any of the .env variables

const port = process.env.PORT || 5001;

const app = express(); //initialize express app

app.get('/', (req, res) => res.send('API is up and running!'));

app.get('/api/products', (req, res) => res.send(products));

app.get('/api/products/:id', (req, res) => {
  const id = req.params.id;
  const product = products.find((p) => p._id === id);
  res.json(product);
});

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
