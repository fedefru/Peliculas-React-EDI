const mongoose = require("mongoose");

const { Schema } = mongoose; 

const PeliculaSchema = new Schema ({
    id: {
        type: Number,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    año: {
        type: Date,
        required: true
    },
    puntaje: {
        type: Number,
        required: true
    },
    duracion: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        requiered: true
    },
    descripcion: {
        type: String,
        required: true
    },
    imagen_link: {
        type: String,
        required: true
    }

});

const Pelicula = mongoose.model( "pelicula", PeliculaSchema );

module.exports = Pelicula;