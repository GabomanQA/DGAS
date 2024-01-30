import "../DIAB.CSS";
import { useState } from "react";
import axios from "axios";
import logoUnam from "./logosunam2.png";
import ctit from "./TITUNAMD.png";
import logodgas from "./dgas2.png";
import { useForm, SubmitHandler } from "react-hook-form";


function diabs() {
  const [paterno, setPaterno] = useState("");
  const [materno, setMaterno] = useState("");
  const [nombre, SetNombre] = useState("");
  const [noCuenta, setNoCuenta] = useState("");
  const [p1, setP1] = useState(1);
  const [p2, setP2] = useState(1);
  const [p3, setP3] = useState(1);
  const [p4, setP4] = useState(1);
  const [resultados, setResultados] = useState([]);

  const addDiab = async () => {
    const inputValue = {
      Paterno: paterno,
      Materno: materno,
      Nombre: nombre,
      NoCuenta: noCuenta,
      p1: p1,
      p2: p2,
      p3: p3,
      p4: p4,
      
    };
    console.log(inputValue);
    const response = await axios.post("http://localhost:3080/v1/diabs/", {
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
      <table><p>A través del Examen Médico Automatizado que presentaste al ingresar a la UNAM, informaste que tu vives con diabetes, te pedimos nos respondas las siguientes preguntas para poder hacerte llegar información que te permita controlar la enfermedad y evitar limitaciones que afecten tu calidad de vida.</p></table>
      <table>
        <tr>
          <td>
            <label> Nombre <input               name="nombre"
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
              name="paterno"
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
                name="materno"
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
                name="noCuenta"
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
            <label> ¿En la actualidad recibes atención para controlar tu Diabetes Mellitus?</label>
            <input type="radio" ID="P11" value= "1" onChange={(event) => {setP1(event.target.value); }}/> 
            <label for="P11">SI</label>
            <input type="radio" ID="P12" value= "0" onChange={(event) => {setP1(event.target.value); }}/> 
            <label for="P12">NO</label>
          </td>
      </tr>
      </table>    
      <table>
        <tr>
          <td>
            <label>¿De ser el caso, ¿Dónde recibes atención en la actualidad? </label>
            <input type="radio" ID="P21" name="P21" value= "1" onChange={(event) => {setP2(event.target.value); }}/> 
            <label for="P21">IMSS</label>
            <input type="radio" ID="P22" name="P22" value= "2" onChange={(event) => {setP2(event.target.value); }}/> 
            <label for="P22">OTRA INSTITUCIÓN</label>
            <input type="radio" ID="P22" name="P23" value= "3" onChange={(event) => {setP2(event.target.value); }}/> 
            <label for="P23">MEDICINA PRIVADA</label>
          </td>
      </tr>
      </table>
      <table>
        <tr>
          <td>
            <label> ¿Tienes indicado algún tratamiento?</label>
            <input type="radio" ID="P3SI" name="P3S" value= "1" onChange={(event) => {setP3(event.target.value); }}/> 
            <label for="P3SI">SI</label>
            <input type="radio" ID="P3NO" name="P3N" value= "0" onChange={(event) => {setP3(event.target.value); }}/> 
            <label for="P3N">NO</label>
          </td>
      </tr>
      </table>    
      <table>
        <tr>
          <td>
            <label>¿Si estás bajo tratamiento, el medicamento y las indicaciones médicas te permiten estar controlado?</label>
            <input type="radio" ID="P4SI" name="P4S" value= "1" onChange={(event) => {setP4(event.target.value); }}/> 
            <label for="P4SI">SI</label>
            <input type="radio" ID="P4NO" name="P4N" value= "0" onChange={(event) => {setP4(event.target.value); }}/> 
            <label for="P4NO">NO</label>
          </td>
      </tr>
      </table>    
      <table>
        <tr>
          <td>
            <button onClick={addDiab}> Enviar</button>
          </td>
        </tr>
      </table>
    
    
      </>
  );
}

export default diabs;
