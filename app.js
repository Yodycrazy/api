process.loadEnvFile();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());


// Conectar a la base de datos MongoDB
/* console.log('la clave es ' + process.env.PASSWORD_GMAIL );
 */
const uri = `mongodb+srv://${process.env.USUARIO_MONGO}:${process.env.PASSWORD_MONGO}@cluster0.3uvji6v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Middleware para analizar el cuerpo de la solicitud como JSON
app.use(express.json());

// Rutas de prueba
app.get('/', (req, res) => {
    res.send('Prueba 1 del servidor');
});

// Importar rutas
const postRoute = require('./routes/Post');
app.use('/servicios', postRoute); 
const serviceSchema = new mongoose.Schema({
  companyName: String,
  contactDate: Date,
  email: String,
  phoneNumber: String,
  services: [String]
});

const Service = mongoose.model('Service', serviceSchema);

// Opciones de conexión
const clientOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Conectar a la base de datos
mongoose.connect(uri, clientOptions)
  .then(() => {
    console.log("Conectado exitosamente a MongoDB");
  })
  .catch((error) => {
    console.error("Error conectando a MongoDB:", error);
  });

// Iniciar el servidor
app.listen(10000, () => {
    console.log('Servidor escuchando en el puerto 10000');
});
