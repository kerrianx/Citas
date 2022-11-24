import React from 'react';
import { useState } from 'react';
import './formulario.css';


const Formulario = ({crear_cita}) => {
  
    const [mascota, setMascota] = useState('');
    const [dueño, setDueño] = useState('');
    const [fecha, setFecha] = useState();
    const [hora, setHora] = useState();
    const [sintomas, setSintomas] = useState('');
    
    
   
    
    const handleSubmit=(e)=>{
      e.preventDefault();
       

       const lista_de_citas={
        mascota:mascota,
        dueño:dueño,
        fecha:fecha,
        hora:hora,
        sintomas:sintomas
       }

        crear_cita(lista_de_citas)
        setMascota('')
        setDueño('')
        
        
        setSintomas('')
    }

    
  
  
  
  
    return (
    <>
    <div className='formulario'>
    <form className='row g-3' onSubmit={handleSubmit} >
      <div className="col-md-4"> 
        <label htmlFor="validationDefault01" className="form-label">Nombre de la mascota</label>
        <input type="text" className="form-control" id="validationDefault01" placeholder='ingrese el nombre de la mascota' value={mascota} onChange={(e)=>setMascota(e.target.value)}></input>
      </div>
       <div className="col-md-4"> 
       <label htmlFor="validationDefault02" className="form-label">Dueño</label>
        <input type="text" className="form-control" id="validationDefault02" placeholder="dueño de la mascota" value={dueño} onChange={(e)=>setDueño(e.target.value)}></input>
       </div>
        <div className="col-md-4">
        <label htmlFor="validationDefault03" className="form-label">Fecha</label>
          <input type="date" className="form-control" id="validationDefault03" placeholder="fecha" onChange={(e)=>setFecha(e.target.value)}></input>
        </div>
        <div className="col-md-6">
        <label htmlFor="validationDefault04" className="form-label">Hora</label>
          <input type="time" className="form-control" id="validationDefault04" placeholder="hora" value={hora} onChange={(e)=>setHora(e.target.value)}></input>
        </div>
        <div className="col-md-6">
        <label htmlFor="validationDefault05" className="form-label">Sintomas</label>
          <input type="text" className="form-control" id="validationDefault05" placeholder="sintomas" value={sintomas} onChange={(e)=>setSintomas(e.target.value)}></input>
        </div>
        <div className="col-12">
          <button className="btn btn-warning">guardar</button>
        </div>
        
    
    </form>
  </div>
    </>
  )
}

export default Formulario