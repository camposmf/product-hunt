//E essa routes é como se fosse a Business

const express = require('express');
const routes = express.Router();

const ProductController = require('./controller/ProductController'); //Importa
    
routes.get('/products', ProductController.index);           //GET: Buscar todos os registro.
routes.get('/products/:id', ProductController.show);        //GET: Buscar algum registro especificado pelo ID
    
routes.post('/products', ProductController.store);          //POST: Criar um novo registro.
    
routes.put('/products/:id', ProductController.update);      //PULL: Alterar valores de um registro.
    
routes.delete('/products/:id', ProductController.destroy)   //DELETE: Deleta um registro.

module.exports = routes; //Exportanto arquivo