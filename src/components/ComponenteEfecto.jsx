import { useEffect, useState } from "react"

export const ComponenteEfecto = () => {
  
  const[usuario, setUsuario] = useState("");
  

  const modificarNombre = e =>{
    setUsuario(e.target.value)
  }

   useEffect(() =>{
    console.log("Se cambio algo")
  }, []);

  useEffect(()=>{
    console.log("Se esta cambiando el nombre")
  },[usuario]);

  return (
    <div>
    <h1>Efecto</h1> 
    <input className="inputNombre" type="text" onChange={modificarNombre} placeholder="Ingresa tu nombre"/>
    <p>El nombre ingresado es: {usuario}</p>  
 
    
    </div>
     )
}
