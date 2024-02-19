
const express = require("express");
const app = express(); 
const mysql = require('mysql'); 
const cors = require('cors'); 

app.use(cors()); 
app.use(express.json()); 


//Hacemos la conexion a la base datos
const dataBase = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"empleados"
}); 


//Definimos el puerto
app.listen(3031, ()=>{
    console.log('Puerto ejecutandose de forma correcta')
}); 

//POST
app.post("/create", (req, res)=>{

    const nombre = req.body.nombre;
    const edad = req.body.edad;
    const pais = req.body.pais;
    const cargo = req.body.cargo;
    const anios = req.body.anios;

    //consulta a la base
    dataBase.query('INSERT INTO personas(nombre, edad, pais, cargo, anios) VALUES(?,?,?,?,?)', [nombre,edad,pais,cargo,anios],
    (error, resultado)=>{
      if(error){
        console.log(error)
      } else{
        res.send('El empleado ha sido registrado con éxito!!')
      }
    });
    //5 valores que captamos de la solicitud 

})

//GET
app.get("/empleados", (req, res)=>{

 //consulta a la base
  dataBase.query('SELECT * FROM personas',
  (error, resultado)=>{
    if(error){
      console.log(error)
    } else{
      res.send(resultado)
    }
  });
  //5 valores que captamos de la solicitud 

})