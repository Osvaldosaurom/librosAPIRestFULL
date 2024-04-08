const mongoose = require('mongoose');

const libroSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    gestion: { type: Number, required: true },
    genero: { type: String, required: true },
    cantidad: { type: Number, required: true },
    autor: { type: String, required: true },
}, { timestamps: true }); 

module.exports = mongoose.model('Libro', libroSchema);
