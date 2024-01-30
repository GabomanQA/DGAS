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
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ButtonGroup from '@mui/material/ButtonGroup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import { Grid, colors, FormHelperText, ImageList } from "@mui/material";
import Paper from '@mui/material/Paper';
import Image from 'mui-image'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

//export default function RadioButtons() {
//  const [selectedValue, setSelectedValue] = useState("");
//  const handleChange = (event) => {setSelectedValue(event.target.value); }};

function Cuestionario() {
  const [cuenta, SetCuenta] = useState("");
  const [Paterno, SetPaterno] = useState("");
  const [Materno, SetMaterno] = useState("");
  const [Nombre, SetNombre] = useState("");
  const [Celular, SetCelular] = useState("");
  const [Correo, SetCorreo] = useState("");
  const [AfiliacionSS, SetAfiliacionSS] = useState("1");
  const [count, setCount] = useState(0);
  const [dataRows, setDataRows] = useState([]);
  const [Veces, setVeces] = useState(""); 
  const [instituc_1, setInstituc_1] = useState(0);
  const [instituc_2, setInstituc_2] = useState(0);
  const [instituc_3, setInstituc_3] = useState(0);
  const [instituc_4, setInstituc_4] = useState(0);
  const [instituc_5, setInstituc_5] = useState(0);
  const [instituc_6, setInstituc_6] = useState(0);
  const [instituc_7, setInstituc_7] = useState(0);
  const [instituc_part, setInstituc_part] = useState("");
  const [instituc_otro, setInstituc_otro] = useState("");
  const [pastillas, setPastillas] = useState(0);
  const [Pastilla, setPastilla] = useState(""); 
  const [Insulina, setInsulina] = useState(""); 
  const [Insulinav, setInsulinav] = useState(""); 
  const [Insulina_m, setInsulina_m] = useState(""); 
  const [Insulina_a, setInsulina_a] = useState(""); 
  const [Insulina_no, setInsulina_no] = useState(""); 
  const [Insulina_noo, setInsulina_no_o] = useState(""); 
  const [tratam_otro, settratam_otro] = useState(""); 
  const [tratam_cual, settratam_cual] = useState(""); 
  const [recomendo, setRecomendo] = useState(""); 
  const [Meses, setMeses] = useState(""); 
  const [Ayos, setAyos] = useState(""); 

  //const cambiotipo = (event) => {SetTipo(event.target.value);};
  //const cambiosexo = (event) => {SetSexo(event.target.value);};
  //const cambioescuela = (event) => {setEscuelaSelect(event.target.value);};
  //const Especifica = (event) => {setEspecifica(event.target.value);};
   
  const getCuestionario = async () => {
    const response = await axios.get("http://localhost:3080/v1/cuestionario");
    const data_pac = response.data.recordset.map((row, index) => {
      return {
        cuenta: row.NoCuenta,
        Paterno: row.Paterno,
        Materno: row.Materno,
        Nombre: row.Nombre,
        Celular: row.Celular,
        Correo: row.Correo,
        SeguridadSocial: row.NSS,
        Veces: row.Veces,
        instituc_1: row.instituc_1,
        instituc_2: row.instituc_2,
        instituc_3: row.instituc_3,
        instituc_4: row.instituc_4,
        instituc_5: row.instituc_5,
        instituc_6: row.instituc_6,
        instituc_7: row.instituc_7,
        instituc_part: row.instituc_part,
        instituc_otro: row.instituc_otro,
        pastillas: row.pastillas,
        Pastilla: row.Pastilla,
        Insulina: row.Insulina,
        vecesinsu: row.vecesinsu,
        insulina_m: row.insulina_m,
        insulina_a: row.insulina_a,
        insulina_no: row.insulina_no,
        insulinano_otro: row.insulinano_otro,
        tratamiento_otro: row.tratamiento_otro,
        tratam_cual: row.tratam_cual,
        recomendo: row.recomendo,
      };
    });
    setDataRows(data_pac);
  };
  const updateCuestionario = async (row) => {
    const inputValue = {
      cuenta: row.NoCuenta,
      Paterno: row.Paterno,
      Materno: row.Materno,
      Nombre: row.Nombre,
      Celular: row.Celular,
      Correo: row.Correo,
      SeguridadSocial: row.NSS,
      Veces: row.Veces,
      instituc_1: row.instituc_1,
      instituc_2: row.instituc_2,
      instituc_3: row.instituc_3,
      instituc_4: row.instituc_4,
      instituc_5: row.instituc_5,
      instituc_6: row.instituc_6,
      instituc_7: row.instituc_7,
      instituc_part: row.instituc_part,
      instituc_otro: row.instituc_otro,
      pastillas: row.pastillas,
      Pastilla: row.Pastilla,
      Insulina: row.Insulina,
      vecesinsu: row.vecesinsu,
      insulina_m: row.insulina_m,
      insulina_a: row.insulina_a,
      insulina_no: row.insulina_no,
      insulinano_otro: row.insulinano_otro,
      tratamiento_otro: row.tratamiento_otro,
      tratam_cual: row.tratam_cual,
      recomendo: row.recomendo,
  };
    const response = await axios.put(
      "http://localhost:3080/v1/cuestionario",
      inputValue
    );
  };
  
  Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success"
  });
  return (
    
    <>
    <div>
    <Box sx={{width: "90%", height: "100%", margin: 2,  boxShadow: 3, mb: 1, padding: 3, background: "#022792", borderRadius: 2 }}>
      <ImageList cols={3} variant="woven" gap={2} margin={2} padding={3} >
          <Image src="logosunam.png"  width={220} height={220}  style={{ borderRadius: 6 }} align="left" />
          <Image src="CARATCUESTIONARIO.png" width={800} height={220}  style={{ borderRadius: 6 }} align="left" gap={2}/>
           <Image src="dgas.png" alt="UNAM" width={220} height={220}  style={{ borderRadius: 6 }} />
      </ImageList>
    </Box>  
    <Box sx={{width: "90%", height: "100%", margin: 2,  boxShadow: 3, mb: 1, padding: 3, background: "#022792", borderRadius: 2 }}  >
    <FormGroup sx={{width: "100%", height: "100px", boxShadow: 4, mb: 1,  fontSize: 6, background:"#08a0df", border: 1,  display: "flex", borderRadius: 2 }}>
      <InputLabel id="_tpat">Alumno</InputLabel>
      <TextField sx={{ m: 2, width: '115ch', height: '20ch'}} required id="paterno" label="Apellido Paterno" defaultValue="" value={Paterno} onChange={(event) => {SetPaterno(event.target.value);}} />
      <TextField sx={{ m: 2, width: '115ch' }}  required id="materno" label="Apellido Materno" defaultValue="" value={Materno} onChange={(event) => {SetMaterno(event.target.value);}} />
      <TextField sx={{ m: 2, width: '115ch' }}  required id="nombre"  label="Nombre"           defaultValue="" value={Nombre} onChange={(event) => {SetNombre(event.target.value); }} />            
    </FormGroup>   
       <FormGroup sx={{width: "100%", height: "100px", boxShadow: 4, mb: 1,  fontSize: 6, background:"#08a0df", border: 1,  display: "flex", borderRadius: 2 }}>
       <InputLabel id="_tveces">En los Ultimos 12 meses, ¿ cuántas veces has acudido al Médico para controlar tu diabetes Sin visitar contar las visitas al servicio de urgencias ? </InputLabel>
       <TextField sx={{ m: 1, width: '215ch'}} id="Veces" label="Veces" defaultValue="" value={Veces} onChange={(event) => {setVeces(event.target.value);}}/>
    </FormGroup>                 
    <FormGroup sx={{width: "100%", height: "410px", boxShadow: 4, mb: 1,  fontSize: 6, background:"#08a0df", border: 1,  display: "flex", borderRadius: 2 }}>

        <InputLabel >En que Institución te atiendes para controlar tu diabetes? - puedes marcar mas de una? </InputLabel>
        <FormControlLabel aria-label="position" row sx={{ width: '115ch' }} control={<Checkbox    value={instituc_1}/>} label="IMSS" />
        <FormControlLabel aria-label="position" row sx={{ width: '115ch'}} control={<Checkbox   align="horizontal" value={instituc_2}/>} label="ISSSTE" />
        <FormControlLabel aria-label="position" row sx={{ width: '115ch'}} control={<Checkbox   align="horizontal" value={instituc_3}/>} label="CENTRO DE SALUD" />
        <FormControlLabel sx={{ width: '115ch', flexDirection: 'row'}} control={<Checkbox  size="small" align="horizontal" value={instituc_4}/>} label="HOSPITAL PARTICULAR" />
        <FormControlLabel sx={{ width: '115ch', flexDirection: 'row'}} control={<Checkbox  size="small" align="horizontal" value={instituc_5}/>} label="CONSULTORIO FARMACIA" />
        <FormControlLabel sx={{ width: '115ch', flexDirection: 'row'}} control={<Checkbox  size="small" align="horizontal" value={instituc_6}/>} label="MÉDICO PRIVADO" />
        <FormControlLabel sx={{ width: '115ch', flexDirection: 'row'}} control={<Checkbox  size="small" align="horizontal" value={instituc_7}/>} label="OTRO" />
        <InputLabel id="_otroclinica">especifica  </InputLabel>
        <TextField sx={{ width: '120 ch'}} id= "outlined-basic" label="especifica" defaultValue="" value={instituc_part} onChange={(event) => {setinstituc_part(event.target.value);}}/>
      </FormGroup>    
      <FormGroup sx={{width: "100%", height: "100px", boxShadow: 4, mb: 1,  fontSize: 6, background:"#08a0df", border: 1,  display: "flex", borderRadius: 2 }}>
        <InputLabel >Actualmente tomas pastillas y/o te aplicas insulina para controlar tu azúcar? </InputLabel>
        <RadioGroup>
         <FormControlLabel sx={{ width: '90ch'}} control={<Radio align="horizontal" flexDirection= 'row'/>} label="Solo Pastillas"  value="1" name="radio-buttons" />
         <FormControlLabel sx={{ width: '90ch'}} control={<Radio align="horizontal" flexDirection= 'row'/>} label="Solo Insulina"   value="2" name="radio-buttons" />
         <FormControlLabel sx={{ width: '90ch'}} control={<Radio align="horizontal" flexDirection= 'row'/>} label="Ambas"           value="3"         name="radio-buttons"/>
         <FormControlLabel sx={{ width: '90ch'}} control={<Radio align="horizontal" flexDirection= 'row'/>} label="Ninguno"         Value="4"       name="radio-buttons"/>         
        </RadioGroup>  
        </FormGroup>
        <FormGroup sx={{width: "100%", height: "100px", boxShadow: 4, mb: 1,  fontSize: 6, background:"#08a0df", border: 1,  display: "flex", borderRadius: 2 }}>
           <InputLabel id="_tpast">Qué pastilla tomas para controlar tu azúcar? </InputLabel>
          <TextField id="Pastilla" label="Pastilla" defaultValue="" value=""/>
          <InputLabel id="_tinsu">Qué tipo de insulina usas? </InputLabel>
          <TextField id="Insulina" label="Insulina" defaultValue="" value=""/>      
        </FormGroup>  
        <FormGroup sx={{width: "100%", height: "100px", boxShadow: 4, mb: 1,  fontSize: 6, background:"#08a0df", border: 1,  display: "flex", borderRadius: 2 }}>
          <InputLabel >Cuantas veces al día te aplicas insulina?</InputLabel>
         <RadioGroup>
         <FormControlLabel control={<Radio/>} label="No todos los dias"     value="1" name="radio-buttons" />
         <FormControlLabel control={<Radio/>} label="Una vez al día"        value="2" name="radio-buttons" />
         <FormControlLabel control={<Radio/>} label="2-3 veces al día"      value="3"         name="radio-buttons"/>
         <FormControlLabel control={<Radio/>} label="Más de tres veces"     Value="4"       name="radio-buttons"/>
         </RadioGroup> 
         </FormGroup>
        
         <FormGroup sx={{width: "100%", height: "100px", boxShadow: 4, mb: 1,  fontSize: 6, background:"#08a0df", border: 1,  display: "flex", borderRadius: 2 }}>
         <InputLabel id="tpat">Desde hace cuanto tiempo utilizas insulina</InputLabel>    
         <TextField id="Meses" label="Meses" defaultValue="" value={Meses} onChange={(event) => {setMeses(event.target.value);}}/>      
         <TextField id="Ayos" label="Años" defaultValue="" value={Ayos}  onChange={(event) => {setAyos(event.target.value);}}/>      
         <Button onClick={updateCuestionario}>Enviar</Button>
         </FormGroup>
        </Box>
</div>
     
      <p className="read-the-docs">
        Cuestionario
      </p>
    </>
  );
}
export default Cuestionario;