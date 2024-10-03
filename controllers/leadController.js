/* const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({

    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.USUARIO_GMAIL,
        pass: process.env.PASSWORD_GMAIL
    }
}); */
/* 
const mailToMe = {
    from: "yodys_10@hotmail.com", //correo de ejemplo
    to: process.env.USUARIO_GMAIL,
    subject: "Nuevo lead en web",
    text: `Nombre de la empresa: ${req.body.companyName} 
    \nFecha de contacto: ${req.body.contactDate} 
    \n Email: ${req.body.email} 
    \n Date: ${new Date()} `
}

constMailToLead = {
    from: req.body.email,
    to: process.env.USUARIO_GMAIL,
    subject: "Gracias por contactarnos- EQUIPO RIPE",
    text: "Hola! Gracias por contactarnos. Te escribiremos o llamaremos en la fecha que elegiste para una asesoria gratuita!"
} */

/* //correo de confirmación para el lead
transporter.sendMail(constMailToLead, (err, info) => {

    console.log('message: ', constMailToLead)
    if (err) {
        console.error(err)
    } else {
        console.log(info)
        res.status(200).json(req.body)
    }
});
//correo de confirmación para mi
transporter.sendMail(mailToMe, (err, info) => {

    console.log('message: ', mailToMe)
    if (err) {
        console.error(err)
    } else {
        console.log(info)
        res.status(200).json(req.body)
    }
}); */