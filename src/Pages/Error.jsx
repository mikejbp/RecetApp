import React from 'react';
import ErrorImage from '/img/pag_error.jpg'
import '../Styles/error.css'

const Error = () => {
  return (
    <div className='container-error'>
      <div className='error-message'>
        <h1>Ups! La ruta a la que deseas ingresar NO EXISTE</h1>
        <p>Intenta nuevamente</p>
      </div>
      <img className="error-image" src={ErrorImage} alt="ruta_equivocada">
      </img>
    </div>
  )
}
export default Error;