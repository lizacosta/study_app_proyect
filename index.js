const express = require('express');

const app = express();

const usersRoute =require("./src/route/users/users.route");


//ruta raiz
app.get('/', function (req, res) {
//logica
  res.send('Hello World')
})

app.get('/pagina2', function (req, res) {
    //logica
      res.json({application: "STUDY APP", version: "1.0.0"});
    })
    
//llamada a los router de los UCs
usersRoute(app);


app.listen(3000)
