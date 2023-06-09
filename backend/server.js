import express from 'express';
// import products from './data/products.js';
import dotenv from 'dotenv';
dotenv.config(); //make sure to configure before we use any of the .env variables
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import connectDB from './config/db.js';

const port = process.env.PORT || 5001;

connectDB(); // connect to database

const app = express(); //initialize express app

// body parser middleware - when we are sending data to the server for it to read, we need to parse it
app.use(express.json()); //for raw json
app.use(express.urlencoded({ extended: true })); //for url encoded data

// cookie parser middleware - allows us to access request.cookie
app.use(cookieParser());

app.get('/', (req, res) => res.send('API is up and running!'));

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);



app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
