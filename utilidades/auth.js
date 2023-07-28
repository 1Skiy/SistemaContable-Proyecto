var jwt = require('jsonwebtoken');


function verificarToken(req, res, next) {
  const token = req.header("Authorization").replace('Bearer ', '');
  console.log('Token recibido:', token);
  if (!token) {
      return res.status(401).json({ msg: "Acceso denegado, token no proporcionado." });
  }

  try {
      console.log('Verificando token...');
      const decoded = jwt.verify(token, process.env.secret);
      req.usuario = decoded;
      console.log('Token válido:', decoded);
      next();
  } catch (err) {
      res.status(400).json({ msg: "Token inválido." });
  }
}

function verificarRol(rolesPermitidos, req, res, next) {

    const token = req.headers.authorization.replace('Bearer ', '');


    if (!token) {
      res.status(401).json({ msg: "Acceso denegado, token no proporcionado." });
    }

    try {
      console.log(rolesPermitidos)
      const decoded = jwt.verify(token, process.env.secret);
      if (!rolesPermitidos.includes(decoded.rol)) {
         res.status(403).json({ msg: "Acceso denegado, no tienes el rol adecuado." });
      }
      req.usuario = decoded;
      next();
    } catch (err) {
      res.status(400).json({ msg: "Token inválido." });
    }
  
}

module.exports = {verificarToken, verificarRol };