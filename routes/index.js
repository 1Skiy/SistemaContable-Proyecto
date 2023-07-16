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

  // Registrar Clientes

router.post('/cli/registro', function(req, res, next) {
    clienteNuevoController.registro(req.body)
      .then((ress)=>{
        res.send(ress)
      })
      
      .catch((err)=>{
        res.send(err)
      })
  });
  
  // Buscar Clientes por Cedula
  
  router.get('/cli/busqueda', async (req, res) => {
    try {
      const clientes = await clienteNuevoController.Mostrar_por_cedula(clientes);
      res.render('cliResultado', { results: clientes }); 
    } catch (error) {
      res.status(500).send('Error al obtener los clientes');
    }
  });
  
  router.post('/cli/busqueda', function(req, res, next) {
    clienteNuevoController.Mostrar_por_cedula(req.body)
      .then((ress)=>{
        res.send(ress)
      })
      
      .catch((err)=>{
        res.send(err)
      })
  });

  // Rutas para Cuentas

// Mostrar Cuentas

router.get('/cue', async (req, res) => {
    try {
      const cuentas = await cuentaNuevoController.Mostrar_todos();
      res.render('cue', { results: cuentas }); 
    } catch (error) {
      res.status(500).send('Error al obtener las cuentas');
    }
  });
  
  // Registrar Cuentas
  
  router.post('/cue/registro', function(req, res, next) {
    cuentaNuevoController.registro(req.body)
      .then((ress)=>{
        res.send(ress)
      })
      
      .catch((err)=>{
        res.send(err)
      })
  });
  
  // Editar Cuentas
  
  router.put('/cue/editar', function(req, res, next) {
    cuentaNuevoController.editar(req.body)
      .then((ress)=>{
        res.send(ress)
      })
      
      .catch((err)=>{
        res.send(err)
      })
  });
  
  // Eliminar Cuentas por id
  
  router.delete('/cue/eliminar', function(req, res, next) {
    cuentaNuevoController.eliminar(req.body)
      .then((ress)=>{
        res.send(ress)
      })
      
      .catch((err)=>{
        res.send(err)
      })
  });