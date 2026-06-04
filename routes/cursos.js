const express = require('express');
const router = express.Router();
const controller = require('../controllers/cursoController');

// Listar todos los cursos
router.get('/', controller.index);

// Mostrar formulario de creación
router.get('/nuevo', controller.nuevo);

// Guardar nuevo curso
router.post('/nuevo', controller.crear); 

// Mostrar formulario para editar
// (REVISA ESTO: En index.ejs pusiste '/cursos/editar/:id', la ruta debe ser igual)
router.get('/editar/:id', controller.editar);

// PROCESAR LA ACTUALIZACIÓN (¡Debe ser .put para recibir el ?_method=PUT!)
router.put('/actualizar/:id', controller.actualizar); 

// PROCESAR LA ELIMINACIÓN (¡Debe ser .delete para el formulario de borrar!)
router.delete('/eliminar/:id', controller.eliminar);

module.exports = router;