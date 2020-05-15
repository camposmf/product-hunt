//Esse controler é como se fosse o database

const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){ //Método de listagem de todos os registros
        const { page = 1} = req.query; //Para conseguir pegar a pesquisa por página (/products?page=2), por exemplo.

        const products = await Product.paginate({}, { page, limit: 10 }); //1ª Param: Condições/Filtros. 2ª Param: págs Atual e Limite por página.

        return res.json(products);
    },

    async show(req, res){ //Método para filtragem de um registro específico
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async store(req, res){ //Método de criação de novos registros
        const product = await Product.create(req.body); //Pois a partir do paramêtro req, temos acesso a todos os valores dentro do body

        return res.json(product);
    },

    async update(req, res) { //Método para editar um registro 
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true}); //Encontra o valor e atualiza o body.

        return res.json(product);
    },

    async destroy(req, res) { //Método para remover um registro
        await Product.findByIdAndDelete(req.params.id);

        return res.send('Produto removido com sucesso!!');
    }
}