const Role = require('../models/role')
const Usuario = require('../models/usuario')


const esRoleValido = async(rol = '')=>{
    const existeRol = await Role.findOne({rol});
    if (!existeRol){
        throw new Error (`El rol  ${rol} no está registrado en la bbdd `)
    }
}

const emailExiste = async(correo = '')=>{
    // ahora hay que realizar validaciones
    // si el correo existe
    const existeEmail = await Usuario.findOne({correo});
    if (existeEmail){
        throw new Error(`El correo: ${correo}, ya está registrado`)
    }
}

const existeUsuarioPorId = async(id)=>{
    // ahora hay que realizar validaciones
    // si el correo existe
    const existeUsuario = await Usuario.findById(id);
    if (!existeEmail){
        throw new Error(`El ID no existe: ${id}`);
    }
}

module.exports = {esRoleValido,emailExiste,existeUsuarioPorId}