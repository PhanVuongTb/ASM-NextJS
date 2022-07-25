/** @format */

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import homeRoute from './routes/home';
import productRoute from './routes/products';
import postRoute from './routes/post';
import categoryProductsRoute from './routes/categoryProducts';
import categoryPostRoute from './routes/categoryPots';
import authRoute from './routes/auth';

const app = express();
dotenv.config();

// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

// connnect database
mongoose
  .connect('mongodb://127.0.0.1:27017/asmnexjs')
  .then(() => console.log('Connect db thanh cong'));
  
// Router
app.use('/api', productRoute);
app.use('/api', postRoute);
app.use('/api', categoryProductsRoute);
app.use('/api', categoryPostRoute);
app.use('/api', authRoute);

// connection
const PORT = 8000;
app.listen(PORT, () => {
  console.log('Server is running port', PORT);
});
