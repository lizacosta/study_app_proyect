//const sequelize = require("sequelize");
const {sequelize} = require("../../connection")



const listar = async function(req, res){
    console.log("Listar Usuarios");
    const users = await sequelize.query('SELECT * FROM users WHERE deleted IS false');
    console.log("users", users);
    if(users && users [0]){
        //En users [0] se encuentra el listado de lo que se recupera desde el sc
        res.json({
            success : true,
            usuarios : users [0]
        });
        
    }else{
        res.json({
            success : true,
            usuarios : []
        })
    } 

  

};



























const actualizar = function(req, res){
    console.log("Actualizar Usuarios");
    res.send("Actualizar usuarios");

}

const eliminar = function(req, res){
    console.log("Eliminar Usuarios");
    res.send("Eliminar de usuarios");

}

module.exports = function(req, res){
    console.log("Control de Usuarios");
    res.send("listado de usuarios");

}
module.exports = {listar, actualizar, eliminar};