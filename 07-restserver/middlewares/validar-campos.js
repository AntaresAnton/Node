const { validationResult } = require('express-validator');
// con este middleware podemos validar validarCampos, y ahorarnos de andar copiando y pegando lo mismo cada vez que lo necesitemos (se puede reutilizar)
const validarCampos = (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors);
    }
    next();
}

module.exports = {
    validarCampos
}