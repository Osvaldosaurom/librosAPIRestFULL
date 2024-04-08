const Libro = require('../models/Libro');

exports.crearLibro = async (req, res) => {
    try {
        let libro = new Libro(req.body);
        await libro.save();
        res.send(libro);
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error');
    }
};

exports.listarLibros = async (req, res) => {
    try {
        const libros = await Libro.find();
        res.json(libros);
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al listar');
    }
};

exports.obtenerLibro = async (req, res) => {
    try {
        let libro = await Libro.findById(req.params.id);
        if (!libro) {
            res.status(404).json({ msg: 'No existe el libro con ese codigo' });
        }
        res.json(libro);
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error');
    }
};

exports.actualizarLibro = async (req, res) => {
    try {
        const { titulo, descripcion, gestion, genero, cantidad, autor } = req.body;
        let libro = await Libro.findById(req.params.id);

        if (!libro) {
            res.status(404).json({ msg: 'No existe el libro' });
        }

        libro.titulo = titulo;
        libro.descripcion = descripcion;
        libro.gestion = gestion;
        libro.genero = genero;
        libro.cantidad = cantidad;
        libro.autor = autor;

        libro = await Libro.findOneAndUpdate({ _id: req.params.id }, libro, { new: true });
        res.json(libro);
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al modificar');
    }
};

exports.eliminarLibro = async (req, res) => {
  try {
      const result = await Libro.findByIdAndDelete(req.params.id);
      if (result) {
          res.json({ msg: 'Libro eliminado con éxito' });
      } else {
          res.status(404).json({ msg: 'No se encontró el libro con el ID' });
      }
  } catch (error) {
      console.error(error);
      res.status(500).send('Hubo un error');
  }
};

exports.buscarPorgenero = async (req, res) => {
  const { genero } = req.query; 
  try {
      const libros = await Libro.findOne({ genero: genero })
                                         .sort({ createdAt: -1 }); 
        if (libros.length === 0) {
          return res.status(404).send('No se encontraron datos');
      }
      res.json(libros);
  } catch (error) {
      console.error(error);
      res.status(500).send('Hubo un error');
  }
};

