const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect('mongodb+srv://romulo:Euteamo456@cluster0-qakuv.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true});
requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(process.env.PORT);