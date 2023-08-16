import React from 'react';
import FreeCodeCamp_logo from '../imagenes/FreeCodeCamp_logo.png';
import '../hojas-de-estilo/Logo.css';





const Logo =()=>(
  <div className='freecodecamp-logo-contenedor'>
    <img className='freecodecamp-logo' 
    src={FreeCodeCamp_logo} alt='logo de freecodecamp' />
  </div>
);
export default Logo;