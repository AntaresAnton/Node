const { validationResult } = require('express-validator');
// con este middleware podemos validar validarCampos, y ahorarnos de andar copiando y pegando lo mismo cada vez que lo necesitemos (se puede reutilizar)
const validarCampos = (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors);
    }
    // la función que tiene el next es "bypassear" al momento que la validación sea satisfactoria, para que no bote la app 
    // ejemplo: si este middleware lo aplicamos a validar todo, pasa primero por el nombre, después por el RTCPeerConnectionIceErrorEvent, después por el roll Etc . al momento que encuentre algún detalle que no corresponda, acusa con msg
    next();
}

module.exports = {
    validarCampos
}