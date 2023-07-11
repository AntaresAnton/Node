// en esta sección se desestructurarán algunas cosas para enlazar partes de la bd que está alojada en mongodb
const {Schema,model} = require ('mongoose');
// esto también se puede interpretar como una condicional, similar a un combobox, ya que sólo se podrán seleccionar las opciones que ofrece la bbdd
const RoleSchema = Schema({
    // en esta parte se ingresa la cabecera de lo que queremos llamar, que obviamente esté alojada en al bbdd
    rol: {
        type: String,
        required: [true, 'EL rol es obligatorio']
    }
});


module.exports = model('Role',RoleSchema);