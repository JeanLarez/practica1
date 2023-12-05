import { useContext } from "react";
import { ThemeContext } from "../Context";
import { Link } from "react-router-dom";
import "../assets/styles/navbar.css";

const Navbar = () => {
  const { theme, handleClick } = useContext(ThemeContext);

  return (
    <>
      <nav>
        <ul className="menu">
          <li>
            <Link to={"/"}>Inicio</Link>
          </li>
          <li>
            <Link to={"/contador"}>Contador</Link>
          </li>
          <li>
            <Link to={"/usuarios"}>Usuarios</Link>
          </li>
          <li>
            <Link to={"/registro"}>Registro</Link>
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
