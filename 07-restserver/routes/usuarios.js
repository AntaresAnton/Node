// desestructuramos algunas cosas que vienen de express

const { Router } = require('express');
const { usuariosGet,
        usuariosPost,
        usuariosPut,
        usuariosPatch,
        usuariosDelete
    } = require('../controllers/usuarios');
const { check } = require('express-validator');

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
    check('correo', 'El correo no es valido').isEmail(),
], usuariosPost);
// usuario eliminado correctamente
router.delete('/', usuariosDelete);
// ejemplo para que muestre "patch"
router.patch('/', usuariosPatch);

//////////////////////////

module.exports = router;