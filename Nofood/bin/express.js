const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/configuration/variables');

//Rotas
const categoriaRouter = require('../routes/categoria-router');
const produtoRouter = require('../routes/produto-router');

//Criando/Invocando a Api/Server Web do Express
const app = express();

//Configuração de parse do JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Configurando a conexao com o banco de dados
mongoose.connect(variables.Database.connection);

//Configurando rotas
app.use('/api/categoria', categoriaRouter);
app.use('/api/produto', produtoRouter);

//Exportando nossa Api
module.exports = app;