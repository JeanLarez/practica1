import { useContext } from "react";
import { ThemeContext } from "../Context";
import "../assets/styles/navbar.css";

const Navbar = () => {
  const { theme, handleClick } = useContext(ThemeContext);

  return (
    <>
      <nav>
        <ul className="menu">
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Sobre Nosotros</a>
          </li>
          <li>
            <a href="">Servicios</a>
          </li>
          <li>
            <a href="">Ubicación</a>
          </li>
          <li>
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={handleClick}
            />
            Usar modo oscuro(Ejemplo useContext)
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
