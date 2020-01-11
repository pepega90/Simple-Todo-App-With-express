const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSkema = Schema({
    nama: String
});

let Todo = module.exports = mongoose.model('Todo', todoSkema);