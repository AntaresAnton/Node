const mongoose = require('mongoose');

const dbConnection = async()=>{

    try {

        // conexión para la base de datos con mongoose
        // básicamente es como create drop delete, update
        await mongoose.connect(process.env.MONGODB_CNN,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // se comentan las lineas de abajo ya que arrojan error / están deprecadas - pquintanilla.
            // useCreateIndex: true,
            // useFindAndModify: false
        });
        // aviso de conección satisfactoria
        console.log('')
        console.log('==== Base de datos operativa :D ====');

        // en caso que la conexión falle, lo atrapa el catch
        
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar la BD');
    }

}


module.exports = {
    dbConnection
}