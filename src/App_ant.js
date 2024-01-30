import "./App.css"
import { useState } from "react";
import Axios from "axios";


//import { useForm } from "react-hook-form";


function App() {
  
  const [Paterno, setPaterno] = useState("");
  const [Materno,setMaterno] = useState("");
  const [Nombre, SetNombre] = useState("");
  const [NoCuenta, setNoCuenta] = useState("");
  const [Direccion, setDireccion] = useState("");
  const [Contacto, setContacto] = useState("");
  const [TelContacto, setTelContacto] = useState("");
  const [Procedencia, setProcedencia] = useState("");
  const [Carrera, setCarrera] = useState("");
  const [FNac, setFNac] = useState("");
  const [Prom, setProm] = useState("");
  const [Celular, setCelular] = useState("");
  const [Telcasa, setTelcasa] = useState("");
  const [Correo, setCorreo] = useState("");
  const [Opc1, setOpc1] = useState("");
  const [Opc2, setOpc2] = useState("");
  const [Opc3, setOpc3] = useState("");
  const [Opc4, setOpc4] = useState("");
  const [Opc5, setOpc5] = useState("");
  

// const onSubmit = handleSubmit((data) => {console.log(data)})
const add = () => {
  Axios.post("http://localhost:3080/create",{
    Paterno: Paterno,
    Materno:Materno,
    Nombre:Nombre,
    NoCuenta:NoCuenta,
    Direccion:Direccion,
    Contacto:Contacto,
    TelContacto:TelContacto,
    Procedencia:Procedencia,
    Carrera:Carrera,
    FNac:FNac,
    Prom:Prom,
    Celular:Celular,
    Telcasa:Telcasa,
    Correo:Correo,
    Opc1:Opc1,
    Opc2:Opc2,
    Opc3:Opc3,
    Opc4:Opc4,
    Opc5:Opc5
    }).then(()=>{
    alert("Datos del Alumno Registrados");
    });
}
  return(

  <form >
    <img src="./logosunam.png" alt="HTML5 Icon" width="150" height="150"></img>
    <img src="CARATCUESTIONARIO.png" alt="HTML5 Icon" width="400" height="125"></img>
    <img src="dgas.png" alt="HTML5 Icon" width="150" height="150"></img>
    <label>Nombre prueba<input type="text" onChange={(event)=>{SetNombre(event.target.value);}}/></label>
    <label>Paterno<input type="text"  onChange={(event)=>{setPaterno(event.target.value);}}/></label>
    <label>Materno<input type="text"  onChange={(event)=>{setMaterno(event.target.value);}}/></label>
    <label>No. Cuenta<input type="text"  onChange={(event)=>{setNoCuenta(event.target.value);}}/></label>
    <label>Procedencia
        <select name="procedencia"  onChange={(event)=>{setProcedencia(event.target.value);}}>
        <option value="value1">Value 1</option>
        <option value="value2" selected>Value 2</option>
        <option value="value3">Value 3</option>
      </select></label>
    <label>Carrera
    <select name="carrera"  onChange={(event)=>{setCarrera(event.target.value);}}>
        <option value="value1">Value 1</option>
        <option value="value2" selected>Value 2</option>
        <option value="value3">Value 3</option>
      </select></label>
    <label>Contacto <input type="text"  onChange={(event)=>{setContacto(event.target.value);}}/></label>
    <label>Telefóno Contacto  <input type="text"  onChange={(event)=>{setTelContacto(event.target.value);}}/></label>
    <label>Dirección   <input type="text" rows="5" onChange={(event)=>{setDireccion(event.target.value);}}/></label>
    <label>Inicio <input type="Tel"  onChange={(event)=>{setCelular(event.target.value);}}/></label>
    <label>Telefono de casa    <input type="tel"  onChange={(event)=>{setTelcasa(event.target.value);}}/></label>
    <label>Correo Electrónico    <input type="email"  onChange={(event)=>{setCorreo(event.target.value);}}/></label>
    <label>Opción 1
      <select name="opc1"  onChange={(event)=>{setOpc1(event.target.value);}}>
        <option value="value1">Value 1</option>
        <option value="value2" selected>Value 2</option>
        <option value="value3">Value 3</option>
      </select></label>
      <label>Opción 2
      <select name="opc2" onChange={(event)=>{setOpc2(event.target.value);}}>
        <option value="value1">Value 1</option>
        <option value="value2" selected>Value 2</option>
        <option value="value3">Value 3</option>
      </select></label>
      <label>Opción 3
      <select name="opc3" onChange={(event)=>{setOpc3(event.target.value);}}>
        <option value="value1">Value 1</option>
        <option value="value2" selected>Value 2</option>
        <option value="value3">Value 3</option>
      </select></label>
      <label>Opción 4
      <select name="opc4" onChange={(event)=>{setOpc4(event.target.value);}}>
        <option value="value1">Value 1</option>
        <option value="value2" selected>Value 2</option>
        <option value="value3">Value 3</option>
      </select></label>
      <label>Opción 5
      <select name="opc5" onChange={(event)=>{setOpc5(event.target.value);}}>
        <option value="value1">Value 1</option>
        <option value="value2" selected>Value 2</option>
        <option value="value3">Value 3</option>
      </select></label>

    <button onClick={add}> Enviar</button>
  </form>
 );
}

export default App
