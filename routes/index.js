var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');



const clienteNuevoController = require('../controllers/clienteC');
const cuentaNuevoController = require('../controllers/cuentaC');
const facturaNuevoController = require('../controllers/facturaC');
const productoNuevoController = require('../controllers/productoC');
const proveedorNuevoController = require('../controllers/proveedorC');
const usersControllers = require("../controllers/usersC");
const loginControllers = require("../controllers/loginC")
const { verificarToken, verificarRol } = require("../utilidades/auth");


//Rutas para registrar usuarios

router.get('/registro', (req, res) => {
  res.render('registro'); // Renderiza la vista registro.ejs
});

router.post('/registro', (req, res) => {
  loginControllers.registro(req.body)
    .then((ress) => {
      // Si el registro es exitoso, redireccionar al usuario a la página de inicio de sesión
      res.redirect('/login');
    })
    .catch((err) => {
      res.send(err);
    });
});

//Rutas para el login

router.get('/login', (req, res) => {
  res.render('login'); // Renderiza la vista login.ejs
});

router.post('/login', function(req, res, next) {
  loginControllers.login(req.body)
    .then((token) => {
      console.log('Token generado:', token);

      res.cookie("token", token, {
        httpOnly: true,
      });
      
      if (token) {
        // Inicio de sesión exitoso, redirigir al usuario al menú
        res.redirect('/menu')

      } else {
        // Inicio de sesión fallido, puedes mostrar un mensaje de error o redireccionar a una página de inicio de sesión nuevamente
        res.send("Inicio de sesión fallido. Usuario o contraseña incorrectos.");
      }
    })
    .catch((err) => {
      res.send(err);
    });
});

//Ruta para el menú contador

router.get('/menu',(req, res) => {
  res.render('menu'); // Renderizar la vista menuContador.ejs
});

//Rutas para los usuarios del login

router.get(
  '/users', 
  function (req, res, next) {
    const token = verificarToken(req)
    if (token) {
      next()
    } else {
      res.send("No estas logueado")
    }
  },
  function(req, res, next) {
    usersControllers.todos()
      .then((ress)=>{
        res.send(ress)
      })
      .catch((err)=>{
        res.send(err)
      }
    )
  }
);

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

  router.get('/cli/registro', function(req, res){
    res.render('cliRegistro')
  })

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
  
  router.get('/cli/busqueda', function(req, res){
    res.render('cliBusqueda')
  })
  
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
  
  router.get('/cue/registro', function(req, res){
    res.render('cueRegistro')
  })
  
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
  
  router.get('/cue/editar', function(req, res){
    res.render('cueEditar')
  })
  
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

  router.get('/cue/eliminar', function(req, res){
    res.render('cueEliminar')
  })
  
  router.delete('/cue/eliminar', function(req, res, next) {
    cuentaNuevoController.eliminar(req.body)
      .then((ress)=>{
        res.send(ress)
      })
      
      .catch((err)=>{
        res.send(err)
      })
  });

  // Rutas para Facturas

// Ruta para mostrar Facturas

router.get('/fac', async (req, res) => {
    try {
      const facturas = await facturaNuevoController.Mostrar_todos();
      res.render('fac', { results: facturas }); 
    } catch (error) {
      res.status(500).send('Error al obtener las facturas');
    }
  });
  
  // Registrar Facturas

  router.get('/fac/registro', function(req, res){
    res.render('facRegistro')
  })
  
  router.post('/fac/registro', function(req, res, next) {
    facturaNuevoController.registro(req.body)
      .then((ress)=>{
        res.send(ress)
      })
      
      .catch((err)=>{
        res.send(err)
      })
  });
  
  // Buscar Facturas por fecha
  
  router.get('/fac/busqueda', function(req, res){
    res.render('facBusqueda')
  })
  
  router.post('/fac/busqueda', function(req, res, next) {
    facturaNuevoController.Mostrar_por_dia(req.body)
      .then((ress)=>{
        res.send(ress)
      })
      
      .catch((err)=>{
        res.send(err)
      })
  });

  // Eliminar facturas por id

  router.get('/fac/eliminar', function(req, res){
    res.render('facEliminar')
  })

router.delete('/fac/eliminar', function(req, res, next) {
    facturaNuevoController.eliminar(req.body)
      .then((ress)=>{
        res.send(ress)
      })
      
      .catch((err)=>{
        res.send(err)
      })
  });

  // Rutas para Productos

  // Mostrar Productos

  router.get('/pro', async (req, res) => {
    try {
      const producto = await productoNuevoController.Mostrar_todos();
      res.render('pro', { results: producto }); 
    } catch (error) {
      res.status(500).send('Error al obtener los proveedores');
    }
  });

// Registrar Productos

router.get('/pro/registro', function(req, res){
  res.render('proRegistro')
})

router.post('/pro/registro', function(req, res, next) {
    productoNuevoController.registro(req.body)
      .then((ress)=>{
        res.send(ress)
      })
      
      .catch((err)=>{
        res.send(err)
      })
  });
  
  // Editar Productos

  router.get('/pro/editar', function(req, res){
    res.render('proEditar')
  })
  
  router.put('/pro/editar', function(req, res, next) {
    productoNuevoController.editar(req.body)
      .then((ress)=>{
        res.send(ress)
      })
      
      .catch((err)=>{
        res.send(err)
      })
  });
  
  // Eliminar Productos

  router.get('/pro/eliminar', function(req, res){
    res.render('proEliminar')
  })
  
  router.delete('/pro/eliminar', function(req, res, next) {
    productoNuevoController.eliminar(req.body)
      .then((ress)=>{
        res.send(ress)
      })
      
      .catch((err)=>{
        res.send(err)
      })
  });

  // Rutas para Proveedores

// Mostrar Proveedores

router.get('/prove', async (req, res) => {
    try {
      const proveedors = await proveedorNuevoController.Mostrar_todos();
      res.render('prove', { results: proveedors }); 
    } catch (error) {
      res.status(500).send('Error al obtener los proveedores');
    }
  });
  
  // Registrar Proveedores

  router.get('/prove/registro', function(req, res){
    res.render('proveRegistro')
  })
  
  router.post('/prove/registro', function(req, res, next) {
    proveedorNuevoController.registro(req.body)
      .then((ress)=>{
        res.send(ress)
      })
      
      .catch((err)=>{
        res.send(err)
      })
  });
  
  // Editar Proveedores
  
  router.get('/prove/editar', function(req, res){
    res.render('proveEditar')
  })

  router.put('/prove/editar', function(req, res, next) {
    proveedorNuevoController.editar(req.body)
      .then((ress)=>{
        res.send(ress)
      })
      
      .catch((err)=>{
        res.send(err)
      })
  });
  
module.exports = router;