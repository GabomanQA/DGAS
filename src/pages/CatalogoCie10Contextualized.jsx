import { CatalogoProvider } from "../contexts/CatalogoContext";
import CatalogoCie10 from "./CatalogoCie10";

function CatalogoCie10Contextualized(props) {
  return (
    <CatalogoProvider>
      <CatalogoCie10 />
    </CatalogoProvider>
  );
}

export default CatalogoCie10Contextualized;
