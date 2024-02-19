  import './App.css'
  import React from 'react'; 
  import { useState } from 'react';
  import Axios from 'axios'



  function App() {

    const [nombre, setNombre] = useState(""); 
    const [edad, setEdad] = useState(0); 
    const [pais, setPais] = useState(""); 
    const [cargo, setCargo] = useState(""); 
    const [anios, setAnios] = useState(0); 

    const [empleados, setEmpleados] = useState([]); //Para la lista de empleados

    function axiosServer(){
      Axios.post("http://localhost:3031/create", {
        nombre:nombre,
        edad:edad,
        pais:pais,
        cargo:cargo,
        anios:anios
      }) .then(()=>{
        alert('Se ha registrado el empleado con éxito!!')
      })
    }

    function getEmpleados(){
      Axios.get("http://localhost:3031/create") .then((response)=>{ //cuando se obtiene una respuesta 
      //se guarda en response
        setEmpleados(response.data);
      })
    }

    return (
      <>
        <div className="contenedor">
          <h1>Aplicación para agregar empleados a su base de datos MYSQL</h1>
          <div className="datos">
            <label htmlFor="">Nombre:<input type="text" onChange={(event) => {
              setNombre(event.target.value)
            }}/></label>
            <label htmlFor="">Edad:<input type="number" 
            onChange={(event)=>{
              setEdad(event.target.value)
            }}/></label>
            <label htmlFor="">Pais:<input type="text" 
            onChange={(event)=>{
              setPais(event.target.value)
            }}/></label>
            <label htmlFor="">Cargo:<input type="text" 
            onChange={(event)=>{
              setCargo(event.target.value)
            }}/></label>
            <label htmlFor=" ">Años:<input type="number" 
            onChange={(event)=>{
              setAnios(event.target.value)
            }}/></label>
            <button onClick={axiosServer}>Registrar empleado</button>
          </div>

          <div className="lista">
            <button onClick={getEmpleados}>Agregar a lista</button>
            {
              empleados.map((value, key)=>{
              return <div className=''>{value.nombre}</div>
              })
            }
          </div>
        </div>
      </>
    )
  }

  export default App
