// desestructuramos algunas cosas que vienen de express

const { Router } = require('express');

// llamamos a la función
const router = Router();

//////////////////////////
// en corto, para que se entienda.
// en el archivo "server" está la siguiente ruta = this.app.use('/api/usuarios', require('../routes/user'));
// dicha ruta llama a este archivo. por lo tanto no es necesario en los router.get por ejemplo definirle una ruta, ya que la misma ruta mencionada arriba llama directamente a este archivo y le asigna la ruta, la cual sería = /api/usuarios

// información de usuario obtenida correctamente
router.get('/', (req, res) => {
    res.json({
        msg: 'Get API'
    });
})
// info de usuario enviado correctamente
router.put('/', (req, res) => {
    res.json({
        msg: 'Put API'
    });
})
// usuario creado correctamente
router.post('/', (req, res) => {
    res.status(201).json({
        msg: 'Post API'
    });
})
// usuario eliminado correctamente
router.delete('/', (req, res) => {
    res.json({
        msg: 'Delete API'
    });
})
// ejemplo para que muestre "patch"
router.patch('/', (req, res) => {
    res.json({
        msg: 'Patch API'
    });
})

//////////////////////////

module.exports = router;