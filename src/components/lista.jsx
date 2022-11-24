import React from 'react';
import Tarjeta from './tarjeta';


const Lista = ({citas,eliminar_cita}) => {
     
    console.log(citas.id);
  return (
   
    <div >
        
        <div className='container-fluid'>
          <div className='col d-flex flex-row flex-sm-wrap justify-content-around p-2'>
        {citas.map((cita)=>
          <Tarjeta cita={cita} key={cita.id} eliminar_cita={eliminar_cita}/>
         
)}</div>
        
            </div>
            
    </div>
    
    
  )
}

export default Lista