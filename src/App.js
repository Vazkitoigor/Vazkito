import "./App.css";
// import FreeCodeCamp_logo from './imagenes/FreeCodeCamp_logo.png';
import Boton from "./componentes/Boton";
import Pantalla from "./componentes/Pantalla";
import BotonClear from "./componentes/BotonClear";
import Logo from "./componentes/Logo";
import { useState, useEffect } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");
  const [cuenta, setCuenta] = useState(0);

  useEffect(() => {
    if (cuenta > 1) {
      alert("Utiliza un solo operador");
      setInput("");
      setCuenta(1);
    }
  }, [cuenta]);

  const agregarInput = (val) => {
    if (isNaN(val) && val !== "." && val !== "=") {
      setInput(input + val);
      setCuenta((prevCuenta) => prevCuenta + 1);
    } else {
      setInput(input + val);
      if (cuenta >= 2) {
        setCuenta((prevCuenta) => prevCuenta - 1);
      }
    }
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos");
    }
  };

  return (
    <div className="App">
      {/* <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' 
        src={FreeCodeCamp_logo} alt='logo de freecodecamp' />
      </div> */}
      <Logo />
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput("")}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
