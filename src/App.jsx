import { useEffect, useState } from "react"

function App() {

  //Lo iniciamos en un array vacío
  const [criptos,setCriptos] = useState()

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets")
    //La respuesta la convierte en Json
    .then( (resp) => resp.json() )
    .then((data) =>{
      setCriptos(data.data)
    } )      
    .catch( () => {
      console.error("La petición falló")
    } )
  },[])

  //Si criptos aun no existe
  if(!criptos)
    return <span> Cargando ...</span>

  return (
    <>
      <h1>Lista Cripto Money</h1>
      <ol>
        { criptos.map( ({name,priceUsd}) => (
          <li> Nombre : {name} / Precio : {priceUsd}</li>
        )) }
      </ol>
    </>
  )
}

export default App
