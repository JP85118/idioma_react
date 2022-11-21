import React from 'react'
import { ContextoInfo } from '../Context/Contexto';
import { useContext } from 'react';

const Ubicacion = () => {

  const {persona} =useContext(ContextoInfo);
  const lugar = persona[3].idioma
  return (
    <div className='ubicacion'>
      <h2>{persona[lugar].boton2}</h2>
      <h2>Direccion: {persona[lugar].direccion}</h2>
    </div>
  )
}

export default Ubicacion