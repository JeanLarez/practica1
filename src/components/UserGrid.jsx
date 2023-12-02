import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../Context";
import Card from "./Card";
import "../assets/styles/userGrid.css";

const UserGrid = () => {
  const { theme } = useContext(ThemeContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // console.log(users)

  useEffect(() => {
    const fetchRandomUsers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=3");
        const data = await response.json();
        const cargaRetardada = () => {
          setUsers(data.results);
          setLoading(false);
        };
        setTimeout(cargaRetardada, 5000);
      } catch (error) {
        console.error("Error al obtener los datos de Usuario:", error);
        setLoading(false);
      }
    };

    if (loading) {
      fetchRandomUsers();
    }
  }, [loading]); // El segundo argumento vacío significa que este efecto se ejecutará solo una vez, equivalente a componentDidMount.

  const handleClick = () => {
    setLoading(true); // Al hacer clic en el botón, activar la carga
  };

  return (
    <div className={`users ${theme}`}>
      <h1>Usuarios</h1>
      <h2>(Ejemplo de useEffect - Solicitud a una API utilizando promesas)</h2>
      <button onClick={handleClick} className="button-users">
        Recargar Usuarios
      </button>
      <div className="cards-users">
        {loading === true ? (
          <div>
            <p>Cargando Datos...</p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/63/Elipsis.gif"
              alt=""
            />
          </div>
        ) : (
          users.map((user, index) => <Card key={index} user={user} />)
        )}
      </div>
    </div>
  );
};

export default UserGrid;
