import "../DIAB.css"
import { useState } from "react";
import axios from "axios";
import logoUnam from './logosunam2.png';
import ctit from './tit2.png';
import logodgas from './dgas2.png';
import { useForm, SubmitHandler } from "react-hook-form"


function Servicio(props) {
  
  const [fPaterno, setPaterno] = useState("");
  const [fMaterno,setMaterno] = useState("");
  const [fNombre, SetNombre] = useState("");
  const [fNocuenta, setNoCuenta] = useState("");
  const [fDireccion, setDireccion] = useState("");
  const [fContacto, setContacto] = useState("");
  const [fTelcontacto, setTelContacto] = useState("");
  const [fProcedencia, setProcedencia] = useState("");
  const [fCarrera, setCarrera] = useState("");
  const [fFNac, setFNac] = useState("");
  const [fProm, setProm] = useState("");
  const [fCelular, setCelular] = useState("");
  const [fTelcasa, setTelcasa] = useState("");
  const [fCorreo, setCorreo] = useState("");
  const [fOpc1, setOpc1] = useState("");
  const [fOpc2, setOpc2] = useState("");
  const [fOpc3, setOpc3] = useState("");
  const [fOpc4, setOpc4] = useState("");
  const [fOpc5, setOpc5] = useState("");
  const [resultados, setResultados] = useState([])
  

  const addServicio = async (row) => {
    const inputValue = {
        Paterno: fPaterno,
        Materno: fMaterno,
        Nombre: fNombre,
        NoCuenta: fNocuenta,
        Direccion: fDireccion,
        Contacto: fContacto,
        TelContacto: fTelcontacto,
        Procedencia: fProcedencia,
        Carrera: fCarrera,
        FNac: fFNac,
        Prom: fProm,
        Celular: fCelular,
        Telcasa: fTelcasa,
        Correo: fCorreo,
        Opc1: fOpc1,
        Opc2: fOpc2,
        Opc3: fOpc3,
        Opc4: fOpc4,
        Opc5: fOpc5
  };
  console.log(inputValue)
    const response = await axios.post(
      "http://localhost:3080/v1/servicio", {
      params: inputValue}
    );
    setResultados(response.data.recordset);
  
  }

  return(

<div id="registration-form">
  <div class='fieldset'>
    <legend>Wanna be Cool?!</legend>
    <form action="#" method="post" data-validate="parsley">
      <div class='row'>
        <label for='firstname'>First Name</label>
        <input type="text" placeholder="First Name" name='firstname' id='firstname' data-required="true" data-error-message="Your First Name is required">
      </div>
      <div class='row'>
        <label for="email">E-mail</label>
        <input type="text" placeholder="E-mail"  name='email' data-required="true" data-type="email" data-error-message="Your E-mail is required">
      </div>
      <div class='row'>
        <label for="cemail">Confirm your E-mail</label>
        <input type="text" placeholder="Confirm your E-mail" name='cemail' data-required="true" data-error-message="Your E-mail must correspond">
      </div>
      <input type="submit" value="Register">
    </form>
  </div>
</div>
 );
};

export default Servicio
