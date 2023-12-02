import { useState, useContext } from "react";
import "../assets/styles/contador.css";
import { ThemeContext } from "../Context";

function Contador() {
  const { theme } = useContext(ThemeContext);
  const [count, setCount] = useState(0);

  function handleClickAdd() {
    setCount(count + 1);
  }

  function handleClickSubtract() {
    setCount(count - 1);
  }

  return (
    <div className={`contador ${theme}`}>
      <h1>Contador</h1>
      <h3>(Ejemplo de UseState)</h3>
      <div className="card">
        <button onClick={handleClickAdd}>sumar</button>

        <button onClick={handleClickSubtract}>restar</button>
      </div>

      <div className="card">
        <button className={count >= 0 ? "blue" : "red"}>
          El contador está en {count}
        </button>
      </div>
      <hr />
    </div>
  );
}

export default Contador;
