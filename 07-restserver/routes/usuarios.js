// desestructuramos algunas cosas que vienen de express

const { Router } = require('express');
const { usuariosGet,
        usuariosPost,
        usuariosPut,
        usuariosPatch,
        usuariosDelete
    } = require('../controllers/usuarios');
const { check } = require('express-validator');
const {validarCampos} = require('../middlewares/validar-campos');
const Role = require('../models/role');

// llamamos a la función
const router = Router();

//////////////////////////
// en corto, para que se entienda.
// en el archivo "server" está la siguiente ruta = this.app.use('/api/usuarios', require('../routes/user'));
// dicha ruta llama a este archivo. por lo tanto no es necesario en los router.get por ejemplo definirle una ruta, ya que la misma ruta mencionada arriba llama directamente a este archivo y le asigna la ruta, la cual sería = /api/usuarios

// información de usuario obtenida correctamente
router.get('/', usuariosGet);
// info de usuario enviado correctamente
router.put('/:id', usuariosPut);
// usuario creado correctamente
router.post('/',[
    // se crean middlewares para validación de parámetros
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio  y más de 6 letras').isLength({min: 6}),
    check('correo', 'El correo no es valido').isEmail(),
    check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('rol').custom( async(rol = '') =>{
        const existeRol = await role.findOne({rol});
        if (!existeRol){
            throw new Error(`El rol ${rol} no está registrado en la base de datos`)
        }
    }),
    validarCampos
], usuariosPost);
// usuario eliminado correctamente
router.delete('/', usuariosDelete);
// ejemplo para que muestre "patch"
router.patch('/', usuariosPatch);

//////////////////////////

module.exports = router;