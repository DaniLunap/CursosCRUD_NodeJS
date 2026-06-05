const express = require('express');
const router = express.Router();
const controller = require('../controllers/cursoController');

router.get('/', controller.index);
router.get('/nuevo', controller.nuevo);
router.post('/nuevo', controller.crear); 
router.get('/editar/:id', controller.editar);
router.put('/actualizar/:id', controller.actualizar); 
router.delete('/eliminar/:id', controller.eliminar);

module.exports = router;