import axios from "axios";
import { useEffect, useMemo, useContext } from "react";
import Box from "@mui/material/Box";
import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { catalogoContext } from "../contexts/CatalogoContext";
import StyledTreeItem from "../components/CustomizedTreeItem";
import CustomizedTreeView from "../components/CustomizedTreeView";
import CustomizedList from "../components/CustomizedList";

function CatalogoCie10(props) {
  const {
    primario,
    setPrimario,
    secundario,
    setSecundario,
    final,
    setFinal,
    selected,
    setSelected,
    inserted,
    setInserted,
  } = useContext(catalogoContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:3080/v1/catalogos/cie10"
      );

      setPrimario([...new Set(response.data.recordset.map((row) => row.gpo))]);
      let arr = response.data.recordset.map((row) => {
        return { gpo: row.gpo, sgpo: row.sgpo };
      });

      const uniqueObjects = (arr) => {
        let uniqueStrings = new Set(arr.map((item) => JSON.stringify(item)));
        return Array.from(uniqueStrings).map((str) => JSON.parse(str));
      };

      setSecundario(uniqueObjects(arr));
      setFinal(response.data.recordset);
    };
    fetchData();
  }, []);

  const handleClick = (e) => {
    console.log("Antes", selected);
    if (selected.includes(e.target.innerText)) return;
    selected.push(e.target.innerText);
    setSelected([...selected]);
    console.log("Despues", selected);
  };

  const renderedTreeItems = useMemo(() => {
    return primario.map((element, index) => {
      return (
        <StyledTreeItem nodeId={index.toString()} key={index} label={element}>
          {secundario
            .filter((el) => el.gpo == element)
            .map((element2, index2) => {
              return (
                <StyledTreeItem
                  nodeId={index.toString() + index2.toString()}
                  key={index + index2}
                  label={element2.sgpo}
                >
                  {final
                    .filter(
                      (el) => (el.gpo == element) & (el.sgpo == element2.sgpo)
                    )
                    .map((element3, index3) => {
                      return (
                        <StyledTreeItem
                          nodeId={
                            index.toString() +
                            index2.toString() +
                            index3.toString()
                          }
                          key={index + index2 + index3}
                          label={element3.cve + " - " + element3.descripcio}
                          onClick={handleClick}
                        />
                      );
                    })}
                </StyledTreeItem>
              );
            })}
        </StyledTreeItem>
      );
    });
  }, [primario]);

  const handleReset = (e) => {
    setSelected([]);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CustomizedTreeView>{renderedTreeItems}</CustomizedTreeView>
        <CustomizedList />
      </Box>
      <Button onClick={handleReset}>Resetear</Button>
    </>
  );
}

export default CatalogoCie10;
