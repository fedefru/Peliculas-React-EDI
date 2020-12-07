const express = require('express');
const router = express.Router();
const Pelicula = require('../../model/Pelicula');

// Obtener todos
router.get('/', async (req,res)=>{
    try{
        const peliculas = await Pelicula.find();
        res.json(peliculas)
    }catch(err){
        res.status(500).json({message: err.message});
    }
});

// Obtener uno 
router.get('/:id', getPelicula, (req,res)=>{
    res.json(res.pelicula)
}); 

// Crear uno 
router.post('/', async (req,res)=>{
    const pelicula = new Pelicula(req.body);

    try{
        const peliculaNueva = await pelicula.save();
        res.status(201).json(peliculaNueva);
    }catch(err){
        res.status(400).json({message: err.message});
    }
});

// Actualizar uno 
router.patch('/:id', getPelicula, async (req,res)=>{
    if(req.body.titulo != null){
        res.pelicula.titulo = req.body.titulo;
    }if(req.body.año != null){
        res.pelicula.año = req.body.año;
    }if(req.body.puntaje != null){
        res.pelicula.puntaje = req.body.puntaje;
    }if(req.body.duracion != null){
        res.pelicula.duracion = req.body.duracion;
    }if(req.body.genero != null){
        res.pelicula.genero = req.body.genero;
    }if(req.body.descripcion != null){
        res.pelicula.descripcion = req.body.descripcion;
    }if(req.body.imagen_link != null){
        res.pelicula.imagen_link = req.body.imagen_link;
    }

    try {
        const peliculaModificada = await res.pelicula.save();
        res.json(peliculaModificada);
    }catch(err){
        res.status(400).json({message: err.message});
    }
});

// Borrar uno 
router.delete('/:id', getPelicula, async (req,res)=>{
    try {
        await res.pelicula.remove();
        res.json({message: 'Pelicula eliminada'});
    } catch(err){
        res.status(500).json({message: err.message});
    }
});

// Middleware..
async function getPelicula( req, res, next ){
    let pelicula;
    
    try{
        pelicula = await Pelicula.findById(req.params.id);
        if(pelicula == null){
            return res.status(404).json({message: 'No se pudo encontrar la pelicula'});
        }

    }catch(err){
        res.status(500).json({message: err.message});
    }

    res.pelicula = pelicula;
    next();
}

module.exports = router;