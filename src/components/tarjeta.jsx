import React from 'react';
import Card from 'react-bootstrap/Card';
import './tarjeta.css';

const Tarjeta = ({cita,eliminar_cita}) => {
  
  console.log(cita.id)
  
    return (
    
     <>
     
      <div className='pt-2' >
      <div className='background'>
        <Card.Title className="text-light">mascota: {cita.mascota}</Card.Title>
        <Card.Subtitle className="text-light mt-2">dueño: {cita.dueño}</Card.Subtitle>
        <Card.Subtitle className="text-light mt-2">fecha: {cita.fecha}</Card.Subtitle>
        <Card.Subtitle className="text-light mt-2">hora: {cita.hora}</Card.Subtitle>
        <Card.Subtitle className="text-light mt-2">sintomas: {cita.sintomas}</Card.Subtitle>
        <Card.Subtitle className="text-light mt-2">id:{cita.id}</Card.Subtitle>
        <button className="boton  mt-5" onClick={()=>eliminar_cita(cita.id)}>eliminar</button>
        </div>
        </div>
     
     
  </>
  )
}

export default Tarjeta