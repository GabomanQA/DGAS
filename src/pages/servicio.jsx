import "../App.css";
import { useState } from "react";
import axios from "axios";
import logoUnam from "./logosunam2.png";
import ctit from "./tit2.png";
import logodgas from "./dgas2.png";
import { useForm, SubmitHandler } from "react-hook-form";

function validateEmail() {
  // Get our input reference.
  var emailField = document.getElementById("user-email");

  // Define our regular expression.
  var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  // Using test we can check if the text match the pattern
  if (validEmail.test(emailField.value)) {
    alert("Correo valido, contina");
    return true;
  } else {
    alert("Correo no valido");
    return false;
  }
}

function Servicio() {
  const [Paterno, setPaterno] = useState("");
  const [Materno, setMaterno] = useState("");
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
  const [resultados, setResultados] = useState([]);

  const addServicio = async () => {
    const inputValue = {
      Paterno: Paterno,
      Materno: Materno,
      Nombre: Nombre,
      NoCuenta: NoCuenta,
      Direccion: Direccion,
      Contacto: Contacto,
      TelContacto: TelContacto,
      Procedencia: Procedencia,
      Carrera: Carrera,
      FNac: FNac,
      Prom: Prom,
      Celular: Celular,
      Telcasa: Telcasa,
      Correo: Correo,
      Opc1: Opc1,
      Opc2: Opc2,
      Opc3: Opc3,
      Opc4: Opc4,
      Opc5: Opc5,
    };
    console.log(inputValue);
    const response = await axios.post("http://localhost:3080/v1/servicio/", {
      params: inputValue,
    });
  };

  return (
    <>
      <table>
        <tr>
          <td>
            <img src={logoUnam} width="150" height="150"></img>
          </td>
          <td>
            <img src={ctit} width="900" height="150"></img>
          </td>
          <td>
            <img src={logodgas} width="150" height="150"></img>
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <td>
            <label>
              Nombre
              <input
                name="Nombre"
                placeholder="Nombres"
                type="text"
                onChange={(event) => {
                  SetNombre(event.target.value);
                }}
              />
            </label>
          </td>
          <td>
            <label>
              Paterno
              <input
              name="Paterno"
                placeholder="Apellido Paterno"
                type="text"
                onChange={(event) => {
                  setPaterno(event.target.value);
                }}
              />
            </label>
          </td>
          <td>
            <label>
              Materno
              <input
                name="Materno"
                placeholder="Apellido Materno"
                type="text"
                onChange={(event) => {
                  setMaterno(event.target.value);
                }}
              />
            </label>
          </td>
          <td>
            <label>
              No. Cuenta
              <input
                type="number"
                placeholder="Numero de Cuenta"
                name="NoCuenta"
                onChange={(event) => {
                  setNoCuenta(event.target.value);
                }}
              />
            </label>
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <td>
            <label>
              Procedencia
              <select
                name="Procedencia"
                placeholder="Procedencia"
                onChange={(event) => {
                  setProcedencia(event.target.value);
                }}
              >
                <option value="2">Facultad de Artes y Diseño</option>
                <option value="6">
                  Facultad de Contaduría y Administración
                </option>
                <option value="9">Facultad de Enfermería y Obstetricia</option>
                <option value="15">Escuela Nacional de Trabajo Social</option>
                <option value="12">Facultad de Medicina</option>
                <option value="300">F.E.S. Iztacala</option>
                <option value="500">F.E.S. Zaragoza</option>
              </select>
            </label>
          </td>
          <td>
            <label>
              Carrera
              <select
                name="Carrera"
                placeholder="Carrera"
                onChange={(event) => {
                  setCarrera(event.target.value);
                }}
              >
                <option value="202">Cirujano Dentista</option>
                <option value="203">Enfermería y Obstetricia</option>
                <option value="208">Médico Cirujano</option>
                <option value="209">Optometría</option>
                <option value="210">Psicología</option>
                <option value="219">Farmacia</option>
                <option value="220">Enfermería</option>
                <option value="222">Odontología</option>
                <option value="228">Ortesis y Prótesis</option>
                <option value="304">Contaduría</option>
                <option value="308">Informática</option>
                <option value="301">Administración</option>
                <option value="423">Diseño y Comunicación Visual</option>
              </select>
            </label>
          </td>
          <td>
            <label>Dirección</label>
            <textarea
              rows="5"
              cols="60"
              name="Direccion"
              placeholder="Dirección: Calle, Numero, Colonia, C.P., Alcaldía"
              onChange={(event) => {
                setDireccion(event.target.value);
              }}
            ></textarea>{" "}
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <td>
            <label>
              Fecha Nacimiento{" "}
              <input
                type="date"
                placeholder="FNac"
                name="FNac"
                onChange={(event) => {
                  setFNac(event.target.value);
                }}
              />
            </label>
          </td>
          <td>
            <label>
              Contacto{" "}
              <input
                type="text"
                placeholder="Contacto"
                name="Contacto"
                onChange={(event) => {
                  setContacto(event.target.value);
                }}
              />
            </label>
          </td>
          <td>
            <label>
              Telefóno Contacto{" "}
              <input
                type="text"
                placeholder="Telefono de Contacto"
                name="TelContacto"
                onChange={(event) => {
                  setTelContacto(event.target.value);
                }}
              />
            </label>
          </td>
        </tr>
      </table>

      <table>
        <tr>
          <td>
            <label>
              Celular{" "}
              <input
                type="Tel"
                name="Celular"
                placeholder="Celular"
                onChange={(event) => {
                  setCelular(event.target.value);
                }}
              />
            </label>
          </td>
          <td>
            <label>
              Telefono de casa{" "}
              <input
                type="tel"
                name="Telcasa"
                placeholder="Telefono de casa"
                onChange={(event) => {
                  setTelcasa(event.target.value);
                }}
              />
            </label>
          </td>
          <td>
            <label>
              Correo Electrónico{" "}
              <input
                type="email"
                name="Correo"
                placeholder="eMail"
                onChange={(event) => {
                  setCorreo(event.target.value);
                }}
              />
            </label>
          </td>
          <td>
            <label>
              Promedio
              <input
                type="number"
                name="Prom"
                placeholder="Promedio Obtenido"
                onChange={(event) => {
                  setProm(event.target.value);
                }}
              />
            </label>
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <td>
            <label>
              Primera opción de Servicio
              <select
                name="Opc1"
                placeholder="Primera opción de Servicio"
                onChange={(event) => {
                  setOpc1(event.target.value);
                }}
              >
                <option value="2">Facultad de Artes y Diseño</option>
                <option value="9">Facultad de Enfermería y Obstetricia</option>
                <option value="13">Facultad de Música</option>
                <option value="21">E.N.P. 1 "Gabino Barreda"</option>
                <option value="22">E.N.P. 2 "Erasmo Castellanos Q."</option>
                <option value="23">E.N.P. 3 "Justo Sierra"</option>
                <option value="24">E.N.P. 4 "Vidal Castañeda y N"</option>
                <option value="25">E.N.P. 5 "José Vasconcelos"</option>
                <option value="26">E.N.P. 6 "Antonio Caso"</option>
                <option value="27">E.N.P. 7 "Ezequiel A. Chávez"</option>
                <option value="28">E.N.P. 8 "Miguel E. Schulz"</option>
                <option value="29">E.N.P. 9 "Pedro de Alba"</option>
                <option value="31">C.C.H. Plantel Azcapotzalco</option>
                <option value="32">C.C.H. Plantel Naucalpan</option>
                <option value="33">C.C.H. Plantel Vallejo</option>
                <option value="34">C.C.H. Plantel Oriente</option>
                <option value="35">C.C.H. Plantel Sur</option>
                <option value="100">F.E.S. Cuautitlán</option>
                <option value="200">F.E.S. Acatlán</option>
                <option value="300">F.E.S. Iztacala</option>
                <option value="400">F.E.S. Aragón</option>
                <option value="500">F.E.S. Zaragoza</option>
                <option value="7000">
                  Dirección General de Atención a la Salud
                </option>
              </select>
            </label>
          </td>
          <td>
            <label>
              Segunda opción de Servicio
              <select
                name="Opc2"
                placeholder="Segunda opción de Servicio"
                onChange={(event) => {
                  setOpc2(event.target.value);
                }}
              >
                <option value="2">Facultad de Artes y Diseño</option>
                <option value="9">Facultad de Enfermería y Obstetricia</option>
                <option value="13">Facultad de Música</option>
                <option value="21">E.N.P. 1 "Gabino Barreda"</option>
                <option value="22">E.N.P. 2 "Erasmo Castellanos Q."</option>
                <option value="23">E.N.P. 3 "Justo Sierra"</option>
                <option value="24">E.N.P. 4 "Vidal Castañeda y N"</option>
                <option value="25">E.N.P. 5 "José Vasconcelos"</option>
                <option value="26">E.N.P. 6 "Antonio Caso"</option>
                <option value="27">E.N.P. 7 "Ezequiel A. Chávez"</option>
                <option value="28">E.N.P. 8 "Miguel E. Schulz"</option>
                <option value="29">E.N.P. 9 "Pedro de Alba"</option>
                <option value="31">C.C.H. Plantel Azcapotzalco</option>
                <option value="32">C.C.H. Plantel Naucalpan</option>
                <option value="33">C.C.H. Plantel Vallejo</option>
                <option value="34">C.C.H. Plantel Oriente</option>
                <option value="35">C.C.H. Plantel Sur</option>
                <option value="100">F.E.S. Cuautitlán</option>
                <option value="200">F.E.S. Acatlán</option>
                <option value="300">F.E.S. Iztacala</option>
                <option value="400">F.E.S. Aragón</option>
                <option value="500">F.E.S. Zaragoza</option>
                <option value="7000">
                  Dirección General de Atención a la Salud
                </option>
              </select>
            </label>
          </td>
          <td>
            <label>
              Tercera opción de Servicio
              <select
                name="opc3"
                onChange={(event) => {
                  setOpc3(event.target.value);
                }}
              >
                <option value="2">Facultad de Artes y Diseño</option>
                <option value="9">Facultad de Enfermería y Obstetricia</option>
                <option value="13">Facultad de Música</option>
                <option value="21">E.N.P. 1 "Gabino Barreda"</option>
                <option value="22">E.N.P. 2 "Erasmo Castellanos Q."</option>
                <option value="23">E.N.P. 3 "Justo Sierra"</option>
                <option value="24">E.N.P. 4 "Vidal Castañeda y N"</option>
                <option value="25">E.N.P. 5 "José Vasconcelos"</option>
                <option value="26">E.N.P. 6 "Antonio Caso"</option>
                <option value="27">E.N.P. 7 "Ezequiel A. Chávez"</option>
                <option value="28">E.N.P. 8 "Miguel E. Schulz"</option>
                <option value="29">E.N.P. 9 "Pedro de Alba"</option>
                <option value="31">C.C.H. Plantel Azcapotzalco</option>
                <option value="32">C.C.H. Plantel Naucalpan</option>
                <option value="33">C.C.H. Plantel Vallejo</option>
                <option value="34">C.C.H. Plantel Oriente</option>
                <option value="35">C.C.H. Plantel Sur</option>
                <option value="100">F.E.S. Cuautitlán</option>
                <option value="200">F.E.S. Acatlán</option>
                <option value="300">F.E.S. Iztacala</option>
                <option value="400">F.E.S. Aragón</option>
                <option value="500">F.E.S. Zaragoza</option>
                <option value="7000">
                  Dirección General de Atención a la Salud
                </option>
              </select>
            </label>
          </td>
          <td>
            <label>
              Cuarta opción de Servicio
              <select
                name="opc4"
                onChange={(event) => {
                  setOpc4(event.target.value);
                }}
              >
                <option value="2">Facultad de Artes y Diseño</option>
                <option value="9">Facultad de Enfermería y Obstetricia</option>
                <option value="13">Facultad de Música</option>
                <option value="21">E.N.P. 1 "Gabino Barreda"</option>
                <option value="22">E.N.P. 2 "Erasmo Castellanos Q."</option>
                <option value="23">E.N.P. 3 "Justo Sierra"</option>
                <option value="24">E.N.P. 4 "Vidal Castañeda y N"</option>
                <option value="25">E.N.P. 5 "José Vasconcelos"</option>
                <option value="26">E.N.P. 6 "Antonio Caso"</option>
                <option value="27">E.N.P. 7 "Ezequiel A. Chávez"</option>
                <option value="28">E.N.P. 8 "Miguel E. Schulz"</option>
                <option value="29">E.N.P. 9 "Pedro de Alba"</option>
                <option value="31">C.C.H. Plantel Azcapotzalco</option>
                <option value="32">C.C.H. Plantel Naucalpan</option>
                <option value="33">C.C.H. Plantel Vallejo</option>
                <option value="34">C.C.H. Plantel Oriente</option>
                <option value="35">C.C.H. Plantel Sur</option>
                <option value="100">F.E.S. Cuautitlán</option>
                <option value="200">F.E.S. Acatlán</option>
                <option value="300">F.E.S. Iztacala</option>
                <option value="400">F.E.S. Aragón</option>
                <option value="500">F.E.S. Zaragoza</option>
                <option value="7000">
                  Dirección General de Atención a la Salud
                </option>
              </select>
            </label>
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <td>
            <label>
              Quinta opción de Servicio
              <select
                name="opc5"
                onChange={(event) => {
                  setOpc5(event.target.value);
                }}
              >
                <option value="2">Facultad de Artes y Diseño</option>
                <option value="9">Facultad de Enfermería y Obstetricia</option>
                <option value="13">Facultad de Música</option>
                <option value="21">E.N.P. 1 "Gabino Barreda"</option>
                <option value="22">E.N.P. 2 "Erasmo Castellanos Q."</option>
                <option value="23">E.N.P. 3 "Justo Sierra"</option>
                <option value="24">E.N.P. 4 "Vidal Castañeda y N"</option>
                <option value="25">E.N.P. 5 "José Vasconcelos"</option>
                <option value="26">E.N.P. 6 "Antonio Caso"</option>
                <option value="27">E.N.P. 7 "Ezequiel A. Chávez"</option>
                <option value="28">E.N.P. 8 "Miguel E. Schulz"</option>
                <option value="29">E.N.P. 9 "Pedro de Alba"</option>
                <option value="31">C.C.H. Plantel Azcapotzalco</option>
                <option value="32">C.C.H. Plantel Naucalpan</option>
                <option value="33">C.C.H. Plantel Vallejo</option>
                <option value="34">C.C.H. Plantel Oriente</option>
                <option value="35">C.C.H. Plantel Sur</option>
                <option value="100">F.E.S. Cuautitlán</option>
                <option value="200">F.E.S. Acatlán</option>
                <option value="300">F.E.S. Iztacala</option>
                <option value="400">F.E.S. Aragón</option>
                <option value="500">F.E.S. Zaragoza</option>
                <option value="7000">
                  Dirección General de Atención a la Salud
                </option>
              </select>
            </label>
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <td>
            <button onClick={addServicio}> Enviar</button>
          </td>
        </tr>
      </table>
      </>
  );
}

export default Servicio;
