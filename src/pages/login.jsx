import * as React from 'react';
//import {Box, Paper } from '@mui/material';
import {Box, Paper, Typography,TextField} from '@mui/material';
function login(props) {
    const [nombre, setNombre] = useState("");
    const [paterno, setPaterno] = useState("");
    const [materno, setMaterno] = useState("");
    const [cuenta, setCuenta] = useState("");
    const [escuela, setEscuela] = useState("");
    const [tipoPaciente, setTipoPaciente] = useState("");
    const [resultados, setResultados] = useState([])
const params = {
    Nombre: nombre,
    Paterno: paterno,
    Materno: materno,
    Paciente: cuenta,
    Escuela: escuela,
    Tipo: tipoPaciente,
  };
const Auth = () =>  {
return (
<Box sx={{
    display:"flex", 
    justifyContent:"center", 
    alignItems:"center", 
    height: "100%"}}>
    <Paper elevation={2} sx={{P:4,}}>
        <Typography variant='h4' color="initial">
            Login
            <TextField
             label="Paterno"
             className="tf-form"
             value={paterno}
             
            />
        </Typography>   
    </Paper>
</Box>
);
};
export default login