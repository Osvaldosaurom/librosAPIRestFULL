const express = require('express');
const router = express.Router();
const librosController = require('../controllers/librosController');

router.post('/', librosController.crearLibro);
router.get('/', librosController.listarLibros);
router.get('/buscarlibro', librosController.buscarPorgenero);
router.get('/:id', librosController.obtenerLibro);
router.put('/:id', librosController.actualizarLibro);
router.delete('/:id', librosController.eliminarLibro);


module.exports = router;
