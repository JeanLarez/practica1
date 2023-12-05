import { useState } from "react";
import "../assets/styles/form.css";

const Form = () => {
  const [persona, setPersona] = useState({
    nombre: "",
    apellido: "",
    correo: "",
  });

  function handleChangeName(e) {
    setPersona({
      ...persona,
      nombre: e.target.value,
    });
  }
  function handleChangeLastName(e) {
    setPersona({
      ...persona,
      apellido: e.target.value,
    });
  }
  function handleChangeCorreo(e) {
    setPersona({
      ...persona,
      correo: e.target.value,
    });
  }

  return (
    <div className="formContainer">
      <form action="" className="form">
        <h4>Ejemplo de Formulario (Tomar valores del input)</h4>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            value={persona.nombre}
            onChange={handleChangeName}
            placeholder="Ejemplo: Juan"
          />
        </div>
        <div>
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            value={persona.apellido}
            onChange={handleChangeLastName}
            placeholder={"Ejemplo: Perez"}
          />
        </div>

        <div>
          <label htmlFor="correo">Correo Electrónico</label>
          <input
            type="email"
            id="correo"
            value={persona.correo}
            onChange={handleChangeCorreo}
            placeholder="ejemplo@correo.com"
          />
        </div>
      </form>

      <h2>
        {persona.nombre} {persona.apellido}
      </h2>
      <h2>{persona.correo}</h2>
    </div>
  );
};

export default Form;
