// Usando express
const express = require('express');
const app = express();
// la constante port se deja así ya que en caso de tener conflictos con puertos, sólo se modifica la const y no hay que modificar nada más
const port = 8080;


// servir contenido estático - middleware
// la función de abajo indica lo siguiente: llama directamente a la carpeta public para que los archivos html que se encuentren en ella puedan ser utilizados por express mediante las llamadas (app.get | res.send)
app.use(express.static('public'));
// ojo que si uno se pone a jugar en esta parent, la ruta public es la que manda, por lo tanto mientras esté el app use en esta sección, todas las funciones llevarán a esa carpeta


// los app get con express sirven para realizar "rutas", esto quiere decir que podemos condicionar las rutas respectivas para nuestra app. como se ve en los ejemplos de abajo, podemos ir personalizando cada enlace, al final hay un comodín ('*') asterisco, que sirve para dejar un mensaje en cualquier ruta que no exista.
app.get('/hola-mundo', function (req, res) {
  res.send('Hola Mundo en su respectiva ruta');
});

// llamado al menu generic
app.get('/generic', function (req, res) {
  res.sendFile(__dirname + '/public/generic.html');
});

// llamado al menú elements
app.get('/generic', function (req, res) {
  res.sendFile(__dirname + '/public/elements.html');
});

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
  });

  app.listen(port, () => {
    console.log(`Este ejemplo está corriendo en el puerto ${port}`);
  })