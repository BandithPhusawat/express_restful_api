const express = require('express');
const router = express.Router();
const { lists, listID, update, remove, create } = require('../Controllers/ProductController');

router.get('/product', lists );

router.get('/product/:id', listID );

router.post('/product/add', create );

router.put('/product/:id', update );

router.delete('/product/:id', remove );

module.exports = router;