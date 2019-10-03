const mongoose = require('express');

module.exports = new mongoose.Schema({
    nome: String,
    email: String
}, { collection: 'user' }
);
