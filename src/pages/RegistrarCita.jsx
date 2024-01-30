import { Button, Container, List, ListItemButton, ListItemText, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import {Link} from 'react-router-dom'

function RegistrarCita(props) {
  const [nombre, setNombre] = useState("");
  const [paterno, setPaterno] = useState("");
  const [materno, setMaterno] = useState("");
  const [cuenta, setCuenta] = useState("");
  const [escuela, setEscuela] = useState("");
  const [tipoPaciente, setTipoPaciente] = useState("");
  const [resultados, setResultados] = useState([])

  const handleBuscar = async (e) => {
    const params = {
      Nombre: nombre,
      Paterno: paterno,
      Materno: materno,
      Paciente: cuenta,
      Escuela: escuela,
      Tipo: tipoPaciente,
    };
    Object.keys(params).forEach((k) => {
      if (params[k] == "") delete params[k];
    });
    const response = await axios.get("http://localhost:3080/v1/expedientes/buscar", {
      params: params,
    });
    setResultados(response.data.recordset)
  };



  return (
    <>
      <div className="container-flex">
        <div className="column-main">
          <TextField
            label="Nombre"
            className="tf-form"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
          <TextField
            label="Apellido Paterno"
            className="tf-form"
            value={paterno}
            onChange={(e) => {
              setPaterno(e.target.value);
            }}
          />
          <TextField
            label="Apellido Materno"
            className="tf-form"
            value={materno}
            onChange={(e) => {
              setMaterno(e.target.value);
            }}
          />
          <TextField
            label="Cuenta"
            className="tf-form"
            value={cuenta}
            onChange={(e) => {
              setCuenta(e.target.value);
            }}
          />
          <TextField
            label="Escuela"
            className="tf-form"
            value={escuela}
            onChange={(e) => {
              setEscuela(e.target.value);
            }}
          />
          <TextField
            label="Tipo de Paciente"
            className="tf-form"
            value={tipoPaciente}
            onChange={(e) => {
              setTipoPaciente(e.target.value);
            }}
          />
          <Button
            variant="contained"
            size="medium"
            className="btn-form"
            onClick={handleBuscar}
          >
            Buscar
          </Button>
        </div>
        <div className="column-sub">
          <List>
            {resultados.map((r, index) => (
                <ListItemButton key={index} >
                    <Link to={"../generar-cita?"+r.nombre_comp}>{r.nombre_comp}</Link>
                </ListItemButton>
            ))}
          </List>
        </div>
      </div>
    </>
  );
}

export default RegistrarCita;
