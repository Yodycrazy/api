const mongoose = require('mongoose');

// Definir el esquema de Post adaptado al formulario
const postSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true
  },
  contactDate: {
    type: Date,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  services: {
    type: [String], // Lista de servicios seleccionados: "Creación de sitio web", "Conectar empresas", "Hosting para páginas"
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Exportar el modelo
module.exports = mongoose.model('Post', postSchema);
