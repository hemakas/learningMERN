import express, { Router } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// routes
import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://wfYDE0720sNJMERnUser:wfYDE0720sNJ@cluster0.bzxh9.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect (
    CONNECTION_URL, { useNewUrlParser: true,useUnifiedTopology: true }
).then (
    () => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))
).catch (
    (error) => console.log(error.message)
);

app.use('/posts', postRoutes);