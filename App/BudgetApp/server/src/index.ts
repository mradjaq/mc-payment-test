import express from 'express';
import mongoose from 'mongoose'
import { json } from 'body-parser';
import Router from './routes';

const app = express();
app.use(json())
app.use('/api',Router)

mongoose.connect('mongodb://localhost:27017/mcmstorage', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, ()=> (console.log('Connected to DB')))


app.listen(3000, ()=> {
    console.log('===> Server is listening port 3000');
})