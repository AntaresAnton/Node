const express = require('express');
const app = express();
const port = 4000;
// los app get con express sirven para realizar "rutas", esto quiere decir que podemos condicionar las rutas respectivas para nuestra app. como se ve en los ejemplos de abajo, podemos ir personalizando cada enlace, al final hay un comodín ('*') asterisco, que sirve para dejar un mensaje en cualquier ruta que no exista.
app.get('/', function (req, res) {
    res.send('Home Page')
  });

app.get('/hola-mundo', function (req, res) {
  res.send('Hola Mundo en su respectiva ruta')
});

app.get('*', function (req, res) {
    res.send('404 | Page Not Found')
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })