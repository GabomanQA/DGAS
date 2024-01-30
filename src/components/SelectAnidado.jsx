import { Box, SvgIcon } from "@mui/material";
import React, { useState } from 'react';


const SelectAnidado(props) {
    const [tesc, setTesc] = useState("");
    const [esc, setEsc] = useState("");
    
  return (
   <div>
        <h2>Select anidado</h2>
        <h3>Tipo de Escuela</h3>
        <Selectlist 
        title="Tipo" 
        url=handleChange={(e) => {
            setTesc(e.target.value);
            }}/>
        {tesc&&(
        <Selectlist 
        title="Escuela" 
        url=handleChange={(e) => {
            setEsc(e.target.value);
            }}/>
        )}
</div>)
