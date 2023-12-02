import { useState, useEffect } from "react";
import Modal from "./Modal";

const Alert = () => {
  const [show, setShow] = useState(false);
  const [posicion, setPosicion] = useState({ x: 0, y: 0 });
  // console.log(posicion)
  useEffect(() => {
    function handleMove(e) {
      setPosicion({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  useEffect(() => {
    if (posicion.y >= 0 && posicion.y <= 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [posicion]);

  return <div>{show && <Modal />}</div>;
};

export default Alert;
