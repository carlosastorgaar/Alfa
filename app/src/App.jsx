import { useState } from 'react'
import alfaLogo from '/alfa.svg'
import NavScrollExample from './components/Nav'
import WithLabelExample from './components/Progreso'
import BasicExample from './components/Ingreso'
import Card from './components/Card'
import vehicle from './data/vehicle'

function App() {
  
  
  const vehicleList = vehicle.map((v, index) => {
    return <Card key={index} title={v.name} description={v.description} />;
  });
  
  return (

    <>
    <NavScrollExample />
    <BasicExample />
    
  
    

    <div>
    <h2>Actividades</h2>
    <WithLabelExample />
    
      {vehicleList}
    </div>
  
    
    </>

)
}

export default App
