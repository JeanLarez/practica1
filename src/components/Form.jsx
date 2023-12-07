import { useState } from "react";
import { FormGroup, FloatingLabel, FormControl } from "react-bootstrap";
// import "../assets/styles/form.css";
import Form from 'react-bootstrap/Form';

const Formulario = () => {
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
    <Form className="container mt-5 w-25 bg-info p-5 rounded-4">
      <FormGroup action="" className="form">
        <h4>Ejemplo de Formulario (Tomar valores del input)</h4>
        <FloatingLabel
          controlId="floatingInputName"
          label="Name"
          className="mb-3"
        >
          <FormControl
            type="text"
            id="nombre"
            value={persona.nombre}
            onChange={handleChangeName}
            placeholder="Name"
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInputLastName"
          label="Lastname"
          className="mb-3">
          
          <FormControl
            type="text"
            id="apellido"
            value={persona.apellido}
            onChange={handleChangeLastName}
            placeholder="Lastname"
          />
        </FloatingLabel>

        <FloatingLabel 
        controlId="floatingInputEmail"
        label="Email"
        className="mb-3"
        >
          <FormControl
            type="email"
            id="correo"
            value={persona.correo}
            onChange={handleChangeCorreo}
            placeholder="ejemplo@correo.com"
          />
        </FloatingLabel>
      </FormGroup>

      <h2>
        {persona.nombre} {persona.apellido}
      </h2>
      <h2>{persona.correo}</h2>
    </Form>
  );
};

export default Formulario;
