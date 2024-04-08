const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

// Importar rutas
const librosRoutes = require('./routes/libros');

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/db_libros', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Conectado a MongoDB"))
  .catch(err => console.error("No se pudo conectar a MongoDB", err));

// Rutas
app.use('/api/libros', librosRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
