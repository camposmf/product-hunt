//Essa Model é como se fosse o DTO

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true //Campo obrigatório!
    },

    description: {
        type: String,
        required: true
    },

    url: {
        type: String,
        required: true
    },

    createAt: { //Esse campo guardará a data de criação de cada produto.
        type: Date,
        default: Date.now
    }
});
ProductSchema.plugin(mongoosePaginate); //Adicionando o plugin de paginação nessa paginação

mongoose.model('Product', ProductSchema); //Esse código resgrita um model dentro da base de dados