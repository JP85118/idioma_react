import React from 'react'
import Profesora from './Profesora'
import Ubicacion from './Ubicacion'
import { ContextoInfo } from '../Context/Contexto'
import { useContext } from 'react'

const PaginaInfo = () => {
  
  const {persona} = useContext(ContextoInfo);
  console.log(persona);

  const lugar = persona[3].idioma
  
  return (
    <>
      <h1>{persona[lugar].titulo}</h1>
      <h2>{persona[lugar].texto}</h2>
      <div>
        <button>{persona[lugar].boton1}</button>
        <button>{persona[lugar].boton2}</button>
      </div>
      <Profesora/>
      <Ubicacion/>
    </>
  )
}

export default PaginaInfo