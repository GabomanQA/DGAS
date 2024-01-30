import { useState, useEffect } from "react";
import axios from "axios";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ButtonGroup from "@mui/material/ButtonGroup";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import Paper from "@mui/material/Paper";
import logoUnam from "./logosunam2.png";
import ctit from "./TITUNAMD.png";
import logodgas from "./dgas2.png";

//export default function RadioButtons() {
//  const [selectedValue, setSelectedValue] = useState("");
//  const handleChange = (event) => {setSelectedValue(event.target.value); }};

function Diabs2() {
  const [paterno, setPaterno] = useState("");
  const [materno, setMaterno] = useState("");
  const [nombre, setNombre] = useState("");
  const [noCuenta, setNoCuenta] = useState("");
  const [p1, setP1] = useState(1);
  const [p2, setP2] = useState(1);
  const [p3, setP3] = useState(1);
  const [p4, setP4] = useState(1);

  const updateDiab = async () => {
    const inputValue = {
      NoCuenta: noCuenta,
      p1: p1,
      p2: p2,
      p3: p3,
      p4: p4,
    };
    const response = await axios.put("http://localhost:3080/v1/diabs/", {
      params: inputValue,
    });
    console.log(response)
  };

  const GetDiabs = async () => {
    const response = await axios.get(
      "http://localhost:3080/v1/diabs/" + noCuenta
    );
    console.log(response)
    const data = response.data.recordset[0]
    setPaterno(data.Paterno)
    setMaterno(data.Materno)
    setNombre(data.Nombre)
  };

  return (
    <>
      <div>
        <Box
          sx={{
            width: "80%",
            height: "60%",
            margin: 2,
            boxShadow: 3,
            mb: 1,
            padding: 3,
            background: "#020d50",
            borderRadius: 2,
          }}
        >
          <table>
            <tr>
              <td></td>
              <td>
                <img src={logoUnam} width="150" height="150"></img>
              </td>
              <td>
                <img src={ctit} width="600" height="150"></img>
              </td>
              <td>
                <img src={logodgas} width="150" height="150"></img>
              </td>
            </tr>
          </table>
          <Paper>
            <p>
              A través del Examen Médico Automatizado que presentaste al
              ingresar a la UNAM, informaste que tu vives con diabetes, te
              pedimos nos respondas las siguientes preguntas para poder hacerte
              llegar información que te permita controlar la enfermedad y evitar
              limitaciones que afecten tu calidad de vida.
            </p>{" "}
          </Paper>
        </Box>

        <Box
          sx={{
            width: "80%",
            height: "100%",
            margin: 2,
            boxShadow: 3,
            mb: 1,
            padding: 3,
            background: "#022792",
            borderRadius: 2,
          }}
        >
          <FormGroup
            sx={{
              width: "100%",
              height: "80px",
              boxShadow: 4,
              mb: 1,
              fontSize: 6,
              background: "#08a0df",
              border: 1,
              borderRadius: 2,
            }}
          >
            <TextField
              sx={{ m: 2, width: "350px", height: "110px" }}
              label="Numero de Cuenta"
              name="noCuenta"
              inputProps={{ maxLength: 9 }}
              onChange={(event) => {
                setNoCuenta(event.target.value);
              }}
            />
            <Button onClick={GetDiabs} variant="contained">
              Cargar datos del Numero de cuenta
            </Button>
          </FormGroup>
          <FormGroup
            sx={{
              width: "100%",
              height: "80px",
              boxShadow: 4,
              mb: 1,
              fontSize: 6,
              background: "#08a0df",
              border: 1,
              display: "flex",
              borderRadius: 2,
            }}
          >
            <InputLabel id="_tpat">Alumno</InputLabel>
            <TextField
              sx={{ m: 2, width: "300px" }}
              id="paterno"
              label="Apellido Paterno"
              value={paterno}
              onChange={(event) => {
                setPaterno(event.target.value);
              }}
            />
            <TextField
              sx={{ m: 2, width: "300px" }}
              id="materno"
              label="Apellido Materno"
              value={materno}
              onChange={(event) => {
                setMaterno(event.target.value);
              }}
            />
            <TextField
              sx={{ m: 2, width: "300px" }}
              id="nombre"
              label="Nombre"
              value={nombre}
              onChange={(event) => {
                setNombre(event.target.value);
              }}
            />
          </FormGroup>

          <FormGroup
            sx={{
              width: "100%",
              height: "70px",
              boxShadow: 4,
              mb: 1,
              fontSize: 6,
              background: "#08a0df",
              border: 1,
              display: "flex",
              borderRadius: 2,
            }}
          >
            <InputLabel>
              {" "}
              ¿En la actualidad recibes atención para controlar tu Diabetes
              Mellitus?
              <RadioGroup
                row
                onChange={(event) => {
                  setP1(event.target.value);
                }}
                value={p1}
                size="small"
              >
                <FormControlLabel
                  control={<Radio size="small" />}
                  label="SI"
                  name="radio-buttons"
                  value="1"
                />
                <FormControlLabel
                  control={<Radio size="small" />}
                  label="NO"
                  name="radio-buttons"
                  value="2"
                />
              </RadioGroup>{" "}
            </InputLabel>
          </FormGroup>
          <FormGroup
            sx={{
              width: "100%",
              height: "70px",
              boxShadow: 4,
              mb: 1,
              fontSize: 6,
              background: "#08a0df",
              border: 1,
              display: "flex",
              borderRadius: 2,
            }}
          >
            <InputLabel>
              ¿De ser el caso, ¿Dónde recibes atención en la actualidad?
            </InputLabel>
            <RadioGroup
              row
              onChange={(event) => {
                setP2(event.target.value);
              }}
              value={p2}
              size="small"
            >
              <FormControlLabel
                control={<Radio size="small" />}
                label="IMSS"
                value="1"
              />
              <FormControlLabel
                control={<Radio size="small" />}
                label="OTRA INSTITUCIÓN"
                value="2"
              />
              <FormControlLabel
                control={<Radio size="small" />}
                label="MEDICINA PRIVADA"
                value="3"
              />
            </RadioGroup>
          </FormGroup>
          <FormGroup
            sx={{
              width: "100%",
              height: "70px",
              boxShadow: 4,
              mb: 1,
              fontSize: 6,
              background: "#08a0df",
              border: 1,
              display: "flex",
              borderRadius: 2,
            }}
          >
            <InputLabel> ¿Tienes indicado algún tratamiento?</InputLabel>
            <RadioGroup
              row
              onChange={(event) => {
                setP3(event.target.value);
              }}
              value={p3}
            >
              <FormControlLabel
                sx={{ width: "90ch" }}
                control={<Radio size="small" />}
                label="SI"
                value="1"
                name="radio-buttons"
              />
              <FormControlLabel
                sx={{ width: "90ch" }}
                control={<Radio size="small" />}
                label="NO"
                value="2"
                name="radio-buttons"
              />
            </RadioGroup>
          </FormGroup>
          <FormGroup
            sx={{
              width: "100%",
              height: "70px",
              boxShadow: 4,
              mb: 1,
              fontSize: 6,
              background: "#08a0df",
              border: 1,
              display: "flex",
              borderRadius: 2,
            }}
          >
            <InputLabel>
              ¿Si estás bajo tratamiento, el medicamento y las indicaciones
              médicas te permiten estar controlado?
            </InputLabel>
            <RadioGroup
              row
              onChange={(event) => {
                setP4(event.target.value);
              }}
              value={p4}
            >
              <FormControlLabel
                sx={{ width: "90ch" }}
                control={<Radio size="small" />}
                label="SI"
                value="1"
                name="radio-buttons"
              />
              <FormControlLabel
                sx={{ width: "90ch" }}
                control={<Radio size="small" />}
                label="NO"
                value="2"
                name="radio-buttons"
              />
            </RadioGroup>
          </FormGroup>
          <FormGroup
            sx={{
              width: "100%",
              height: "10px",
              boxShadow: 4,
              mb: 1,
              fontSize: 6,
              background: "#08a0df",
              border: 1,
              display: "flex",
              borderRadius: 2,
            }}
          >
            <Button onClick={updateDiab} variant="contained">
              Enviar Respuesta
            </Button>
          </FormGroup>
        </Box>
      </div>
    </>
  );
}

export default Diabs2;
