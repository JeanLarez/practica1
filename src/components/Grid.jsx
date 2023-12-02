import { useContext } from "react";
import Profile from "./Profile";
import urlImg from "../utils/imagenes";
import "../assets/styles/grid.css";
import { ThemeContext } from "../Context";

const Grid = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <h1>Galeria</h1>
      <h3>
        (Renderiza las imagenes con la función map sobre el archivo Imagenes)
      </h3>
      {urlImg.map((imagen) => (
        <Profile key={imagen.id} urlImg={imagen.url} />
      ))}
      <hr />
    </div>
  );
};

export default Grid;
