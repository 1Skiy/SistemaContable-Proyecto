var express = require('express');
var router = express.Router();
const conexion = require('../database/db')


const clienteNuevoController = require('../controllers/clienteNuevo');
const cuentaNuevoController = require('../controllers/cuentaNuevo');
const facturaNuevoController = require('../controllers/facturaNuevo');
const productoNuevoController = require('../controllers/productoNuevo');
const proveedorNuevoController = require('../controllers/proveedorNuevo');
const cuentaNuevo = require('../controllers/cuentaNuevo');


// Rutas para Clientes

// Mostrar todos los clientes


router.get('/cli', async (req, res) => {
    try {
      const clientes = await clienteNuevoController.Mostrar_todos();
      res.render('cli', { results: clientes }); 
    } catch (error) {
      res.status(500).send('Error al obtener los clientes');
    }
  });