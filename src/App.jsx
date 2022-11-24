import Formulario from './components/formulario'

import { useState } from 'react';

import './App.css'


import Lista from './components/lista';


function App() {

  const [citas, setCitas] = useState([]);
    
    const crear_cita=(Cita)=>{
      setCitas([...citas,{
        mascota: Cita.mascota,
        dueño: Cita.dueño,
        fecha: Cita.fecha,
        hora: Cita.hora,
        sintomas: Cita.sintomas,
        id:citas.length
      } ])
    }
    console.log(citas.length)
  const eliminar_cita=(registro)=>{
    setCitas(citas.filter(cita=>cita.id !== registro))
    console.log(citas);
  }
    
    
 
  

  return (
   <>
   <div className='body'>
 <div className='formulario'><Formulario crear_cita={crear_cita}  /></div>
<div className='tarjeta' ><Lista citas={citas} eliminar_cita={eliminar_cita} /></div>
    
    
    
   </div>
   
   
   </>
  )
}

export default App
