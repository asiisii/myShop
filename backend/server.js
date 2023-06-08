import express from 'express';
// import products from './data/products.js';
import dotenv from 'dotenv';
dotenv.config(); //make sure to configure before we use any of the .env variables
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
import connectDB from './config/db.js';

const port = process.env.PORT || 5001;

connectDB(); // connect to database

const app = express(); //initialize express app

app.get('/', (req, res) => res.send('API is up and running!'));

app.use('/api/products', productRoutes);




app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
