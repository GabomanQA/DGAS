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
import { DataGrid } from "@mui/x-data-grid";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "../App.css";

function Home() {
  // const [count, setCount] = useState(0);
  const [idPaciente, SetIdPaciente] = useState("");
  const [Paterno, SetPaterno] = useState("");
  const [Materno, SetMaterno] = useState("");
  const [Nombre, SetNombre] = useState("");
  const [Vigencia, SetVigencia] = useState("");
  const [FechaNacimiento, SetFechaNacimiento] = useState("");
  const [Sexo, SetSexo] = useState("M");
  const [Telefonos, SetTelefonos] = useState("1");
  const [EstadoCivil, SetEstadoCivil] = useState("1");
  const [Tipo, SetTipo] = useState("1");
  const [SeguridadSocial, SetSeguridadSocial] = useState("1");
  const [AfiliacionSS, SetAfiliacionSS] = useState("1");
  const [count, setCount] = useState(0);
  const [dataRows, setDataRows] = useState([]);
  const [escuelas, setEscuelas] = useState([]); // Viene de la base
  const [escuelaSelect, setEscuelaSelect] = useState(""); // Viene del select

  const cambiotipo = (event) => {SetTipo(event.target.value);  };
  const cambiosexo = (event) => {SetSexo(event.target.value);  };
  const cambioescuela = (event) => {setEscuelaSelect(event.target.value); };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3080/v1/catalogos/escuelas");
      const data_esc = response.data.recordset.map((row, index) => {
        return {
          escuela: row.escuela,
          nombre: row.nombre,
        };
      });
      setEscuelas(data_esc);
    };
    fetchData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "IdPaciente", headerName: "IdPaciente", width: 90 },
    { field: "Paterno", headerName: "Paterno", width: 150, editable: true },
    { field: "Materno", headerName: "Materno", width: 150, editable: true },
    { field: "Nombre", headerName: "Nombre", width: 150, editable: true },
    { field: "Vigencia", headerName: "Vigencia", width: 150, editable: true },
    { field: "FechaNacimiento", headerName: "FechaNacimiento", width: 150, editable: true},
    { field: "Escuela", headerName: "Escuela", width: 150, editable: true },
    { field: "Sexo", headerName: "Sexo", width: 50, editable: true },
    { field: "Telefonos", headerName: "Telefonos", width: 150, editable: true },
    { field: "EstadoCivil", headerName: "EtsadoCicil", width: 50, editable: true, },
    { field: "Tipo", headerName: "Tipo", width: 50, editable: true },
    { field: "SeguridadSocial", headerName: "Seguridad Social", width: 100, editable: true, },
    { field: "AfiliacionSS", headerName: "Afilición", width: 150, editable: true, },
  ];

  const getExpedientesBtn = async () => {
    const response = await axios.get("http://localhost:3080/v1/expedientes");
    const data_pac = response.data.recordset.map((row, index) => {
      return {
        id: index,
        IdPaciente: row.IdPaciente,
        Paterno: row.Paterno,
        Materno: row.Materno,
        Nombre: row.Nombre,
        Vigencia: row.Vigencia,
        FechaNacimiento: row.FechaNacimiento,
        Sexo: row.Sexo,
        Telefonos: row.Telefonos,
        EstadoCivil: row.EstadoCivil,
        Tipo: row.Tipo,
        SeguridadSocial: row.SeguridadSocial,
        AfiliacionSS: row.AfiliacionSS,
      };
    });
    setDataRows(data_pac);
  };

  const updateExpedienteBtn = async (row) => {
    const inputValue = {
      IdPaciente: row.Idpaciente,
      Paterno: row.Paterno,
      Materno: row.Materno,
      Nombre: row.Nombre,
      Vigencia: row.Vigencia,
      FechaNacimiento: row.FechaNacimiento,
      Sexo: row.Sexo,
      Telefonos: row.Telefonos,
      EstadoCivil: row.EstadoCivil,
      Tipo: row.Tipo,
      SeguridadSocial: row.SeguridadSocial,
      AfiliacionSS: row.AfiliacionSS,
    };
    const response = await axios.put(
      "http://localhost:3080/v1/expedientes",
      inputValue
    );
  };

  return (
    <>
      <div>
        <Box
          sx={{ width: "60%", height: "60%", boxShadow: 3, mb: 2, padding: 3 }}
        >
          <FormGroup>
            <FormControl fullWidth>
              <InputLabel id="_tipo">Tipo</InputLabel>
              <Select label="Tipo" onChange={cambiotipo} value={Tipo}>
                <MenuItem value={1}>Estudiante de CU</MenuItem>
                <MenuItem value={2}>Estudiante de PM</MenuItem>
                <MenuItem value={3}>Empleado</MenuItem>
                <MenuItem value={4}>Aspirante a empleo</MenuItem>
                <MenuItem value={5}>Posgrado</MenuItem>
                <MenuItem value={6}>Otro</MenuItem>
                <MenuItem value={8}>Intercambio</MenuItem>
                <MenuItem value={12}>Familiar de empleado</MenuItem>
              </Select>
            </FormControl>
            <InputLabel id="_tpat">Apellido Paterno</InputLabel>
            <TextField
              required
              id="paterno"
              label="Apellido Paterno"
              defaultValue=""
              value={Paterno}
              onChange={(event) => {
                SetPaterno(event.target.value);
              }}
            />
            <InputLabel id="_tpat">Apellido Materno</InputLabel>

            <TextField
              required
              id="materno"
              label="Apellido Materno"
              defaultValue=""
              value={Materno}
              onChange={(event) => {
                SetMaterno(event.target.value);
              }}
            />
            <InputLabel id="_tpat">Nombre</InputLabel>
            <TextField
              required
              id="nombre"
              label="Nombre"
              defaultValue=""
              value={Nombre}
              onChange={(event) => {
                SetNombre(event.target.value);
              }}
            />
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              {" "}
              Fecha de Nacimiento{" "}
            </InputLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="Fecha de Nacimento"
                  onChange={(event) => {
                    SetFechaNacimiento(event.target.value);
                  }}
                  slotProps={{ textField: { size: "small" } }}
                />
              </DemoContainer>
            </LocalizationProvider>
            <InputLabel id="_tsc">Escuela</InputLabel>

            <Select
              label="Escuela"
              id="Escuela"
              value={escuelaSelect}
              onChange={cambioescuela}
            >
              {escuelas.map((esc, index) => (
                <MenuItem value={esc.escuela} key={esc.escuela}>
                  {esc.nombre}
                </MenuItem>
              ))}
            </Select>

            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              {" "}
              Sexo{" "}
            </InputLabel>
            <Select label="Sexo" onChange={cambiosexo} value={Sexo}>
              <MenuItem value={"M"}>Masculino</MenuItem>
              <MenuItem value={"F"}>Femenino</MenuItem>
            </Select>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              {" "}
              Estado Civil{" "}
            </InputLabel>
            <Select
              labelId="Estadoc"
              id="Edoc"
              value={EstadoCivil}
              label="edoc"
              onChange={(event) => {
                SetEstadoCivil(event.target.value);
              }}
            >
              <MenuItem value={1}>Soltero (a)</MenuItem>
              <MenuItem value={2}>Casado (a)</MenuItem>
              <MenuItem value={3}>Divorciado (a)</MenuItem>
              <MenuItem value={4}>Viudo (a)</MenuItem>
              <MenuItem value={5}>Unión Libre</MenuItem>
              <MenuItem value={6}>Otro</MenuItem>
            </Select>

            <TextField
              required
              id="telefono"
              label="Telefonos"
              defaultValue=""
              value={Telefonos}
              onChange={(event) => {
                SetTelefonos(event.target.value);
              }}
            />
            <TextField
              required
              id="afilia"
              label="Nº de Afiliación"
              defaultValue=""
              value={AfiliacionSS}
              onChange={(event) => {
                SetAfiliacionSS(event.target.value);
              }}
            />
            <TextField
              required
              id="Idpaciente"
              label="Id"
              defaultValue=""
              value={idPaciente}
              onChange={(event) => {
                SetIdPaciente(event.target.value);
              }}
            />
            <Button onClick={updateExpedienteBtn}>Enviar</Button>
          </FormGroup>
        </Box>
      </div>
      <div className="card">
        <button onClick={getExpedientesBtn}>Obtener Expedientes</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <DataGrid
          rows={dataRows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default Home;
