import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useContext } from "react";
import { catalogoContext } from "../contexts/CatalogoContext";

function CustomizedList(props) {
  const { selected, setSelected } = useContext(catalogoContext);
  const removeItem = (event) => {
    setSelected([...selected.filter((item) => item != event.target.innerText)]);
  };
  return (
    <>
      <List>
        {selected.map((element, index) => (
          <ListItem key={index} onClick={removeItem}>
            <ListItemButton>
              <ListItemText primary={element} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default CustomizedList;
