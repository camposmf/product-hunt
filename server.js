const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


//Inciando o APP
const app = express();
app.use(express.json()); //Permite que a aplicação envie dados no formato de JSON.
app.use(cors());

//Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    {   useNewUrlParser: true,
        useUnifiedTopology: true }
);
requireDir('./src/models'); //Dessa forma, todos as models já terão o require.

//Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);