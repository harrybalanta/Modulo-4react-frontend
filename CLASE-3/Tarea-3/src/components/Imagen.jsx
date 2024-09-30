import React from 'react'

const Imagen = (props) => {
  return (
    <div  className="imagen-container">
        <img src={props.Ruta} alt="Imagen"/>
    </div>
  )
}

export default Imagen