import { useState,useEffect } from 'react'
import Observador from './Observador';
import axios from "axios"



const App = () => {
  const [contador, setcontador] = useState(18);

  const manejarContador = () => {
    setcontador(contador+1)
  }



 //  operador terneario = condición ? verdadero : f



  return (
    <>
        <h1>App: {contador}</h1>
        <button onClick={manejarContador}>
          Aumentar
        </button>
        <hr/>
        <Observador contador = {contador}/>

    </>
  )
}

export default App
