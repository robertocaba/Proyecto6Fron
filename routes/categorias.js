const express = require('express');
const router = express.Router();
const CategoriaController = require('../controllers/CategoriaController')

router.post('/createcategoria',CategoriaController.create);
router.get('/getcategorias',CategoriaController.getAll);
router.delete('/deletecategoria/:id',CategoriaController.delete);

module.exports = router;