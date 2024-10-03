const express = require('express');
const router = express.Router();
const Post = require('../models/post'); 

// Ruta para crear un nuevo Post
router.post('/', async (req, res) => {
  try {

    // Crear una nueva instancia del modelo Post con los datos recibidos
    const newPost = new Post({
        companyName: req.body.companyName,
        contactDate: req.body.contactDate,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        services: req.body.services
      });
    
    // Guardar el nuevo Post en la base de datos
    await newPost.save();
    
    // Responder con el post creado y el código 201 (Created)
    res.status(201).send('Formulario enviado con exito');
  } catch (error) {
    console.error(error);
    // Enviar un mensaje de error genérico al cliente con el código 500 (Internal Server Error)
    res.status(500).send('Error al guardar el post');
  }
});

module.exports = router;


/** bloque para mostrar solo un post ppor el Id 

Router.get('/:postId', async (req, res) =>{
    try {
        const post = await Post.findById(req.params.PostId);//encontrar por ID
        res.json(post);
    } catch (error) {
        res.json({message: error});
    }
});

/** bloque para borrar un post 

Router.delete('/:postId', async (req, res) =>{
    try {
        const removePost = await Post.remove({_id: req.params.PostId});//borrar
        res.json(removePost);
    } catch (error) {
        res.json({message: error});
    }
});
/** bloque para actualizar un post 

Router.patch('/:postId', async (req, res) =>{
    try {
        const updatePost = await Post.updateOne(
            {_id: req.params.PostId},//Actualizar de uno en uno
            {$set: {title: req.body.title}});
        res.json(updatePost);
    } catch (error) {
        res.json({message: error});
    }
});
*/
