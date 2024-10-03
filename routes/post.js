const express = require('express');
const router = express.Router();
const Post = require('../models/post'); 
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.USUARIO_GMAIL,
        pass: process.env.PASSWORD_GMAIL
    }
});

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

    const mailToMe = {
        from: process.env.USUARIO_GMAIL,
        to: "yodys_10@hotmail.com",
        subject: "Nuevo lead en web",
        text: `Nombre de la empresa: ${req.body.companyName} 
        \n Fecha de contacto: ${req.body.contactDate} 
        \n Email: ${req.body.email} 
        \n Telefono: ${req.body.phoneNumber}
        \n Servicios: ${req.body.services}  
        \n Date: ${new Date()} `
    }

    const mailToLead = {
        from: process.env.USUARIO_GMAIL,
        to: req.body.email,
        subject: "Gracias por contactarnos- EQUIPO RIPE",
        text: "Hola! Gracias por contactarnos. Te escribiremos o llamaremos en la fecha que elegiste para una asesoria gratuita!"
    }

    // Correo de confirmación para el lead
    transporter.sendMail(mailToLead, (err, info) => {
        if (err) {
            console.error('Error al enviar el correo al lead:', err);
        } else {
            console.log('Correo enviado al lead:', info);
        }
    });

    // Correo de confirmación para ti
    transporter.sendMail(mailToMe, (err, info) => {
        if (err) {
            console.error('Error al enviarte el correo:', err);
        } else {
            console.log('Correo enviado a ti:', info);
        }
    });

    // Responder con el post creado y el código 201 (Created)
    res.status(201).json(newPost); // Respuesta en formato JSON para el cliente
  } catch (error) {
    console.error('Error al guardar el post:', error);
    // Enviar un mensaje de error genérico al cliente con el código 500 (Internal Server Error)
    res.status(500).json({ message: 'Error al guardar el post', error: error.message });
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
