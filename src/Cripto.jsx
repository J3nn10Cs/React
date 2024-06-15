import axios from "axios"
import { useEffect, useState } from "react"

const Cripto = () => {

    const API_URL = import.meta.env.VITE_API_URL

    //Lo iniciamos en un array vacío
    const [criptos,setCriptos] = useState()

    useEffect(() => {
        axios.get(`${API_URL}assets`)
        //La respuesta la convierte en Json
        // .then( (resp) => resp.json() )
        // data.data.data es pq nos da un objeto y tenemos que acceder a data y luego a nuestra data
        .then((data) =>{
          setCriptos(data.data.data)
        } )      
        .catch( () => {
          console.error("La petición falló")
        } )
      },[])

      //Si criptos aun no existe
  if(!criptos)
    return <span> Cargando ....</span>

      return(
        <>
            { criptos.map( ({id,name,priceUsd,changePercent24Hr}) => (
            //100pre debe ir el Key para identificar el li
            <div key={id} className="contenedor">
                <h2 className="nombre"> Nombre: {name}</h2>
                <p className="precio">Precio : {parseFloat(priceUsd).toFixed(4)}</p>
                {/* ? -> si ---- : <-sino */}
                <p className={parseFloat(changePercent24Hr) > 0 ? "positivo" : "negativo"}>
                    {parseFloat(priceUsd).toFixed(4)}
                </p>
            </div>
            )) }
        </>
      )
}

export default Cripto