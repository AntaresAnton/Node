
const {Schema,model} = require ('mongoose')

const UsuarioSchema = Schema({
    // validación de nombre
    nombre:{
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    // validación de correo
    correo:{
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    // validación de password
    password:{
        type: String,
        required: [true, 'La contraseña es obligatorio'],
    },
    // imagen random jaja
    img:{
        type: String,
    },
    // rol del usuario
    rol:{
        type: String,
        required: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },
    // estado de usuario
    estado:{
        type: Boolean,
        default: true, 
    },
    // si es que se registró con google
    google:{
        type: Boolean,
        default: false, 
    },

});

module.exports = model('Usuario', UsuarioSchema);