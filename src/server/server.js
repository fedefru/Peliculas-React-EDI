require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', error => console.error(error));
db.once('open', () => console.log('Conectado'));

app.use(express.json());

const peliculasRouter = require('./routes/PeliculaRoutes');
app.use('/peliculas',peliculasRouter);

app.listen(5000, () => console.log('listen on 5000'));