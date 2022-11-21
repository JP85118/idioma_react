import React from 'react'
import { ContextoInfo } from '../Context/Contexto'
import { useContext } from 'react'

const Profesora = () => {

  const {persona} = useContext(ContextoInfo);
  const lugar = persona[3].idioma

  return (
    <div className='profesora'>
      <h1>{persona[lugar].nombre}</h1>
      <img src={persona[lugar].foto}/>
    </div>
  )
}

export default Profesora