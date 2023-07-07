// Usando express
const express = require('express');
const hbs = require('hbs');
require('dotenv').config();
const app = express();
// la constante port se deja así ya que en caso de tener conflictos con puertos, sólo se modifica la const y no hay que modificar nada más
const port = process.env.PORT;

// usaremos handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// servir contenido estático - middleware
// la función de abajo indica lo siguiente: llama directamente a la carpeta public para que los archivos html que se encuentren en ella puedan ser utilizados por express mediante las llamadas (app.get | res.send)
app.use(express.static('public'));
// ojo que si uno se pone a jugar en esta parent, la ruta public es la que manda, por lo tanto mientras esté el app use en esta sección, todas las funciones llevarán a esa carpeta


// los app get con express sirven para realizar "rutas", esto quiere decir que podemos condicionar las rutas respectivas para nuestra app. como se ve en los ejemplos de abajo, podemos ir personalizando cada enlace, al final hay un comodín ('*') asterisco, que sirve para dejar un mensaje en cualquier ruta que no exista.
app.get('/', function (req, res) {
  // ahora se renderizará la vista que está en la carpeta views, especificamente el home.hbs
  res.render('home', {
      nombre: 'Patricio Quintanilla',
      titulo: 'Examen Transversal Programación Web'
  });
});

// llamado al menu generic
app.get('/generic', function (req, res) {
  res.render('generic',{
    nombre: 'Patricio Quintanilla',
    titulo: 'Página Generic'
  });
});

// llamado al menú elements
app.get('/elements', function (req, res) {
  res.render('elements',{
    nombre: 'Patricio Quintanilla',
    titulo: 'Página Elements'
  });
});

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
  });

  app.listen(port, () => {
    console.log(`Este ejemplo está corriendo en el puerto ${port}`);
  })