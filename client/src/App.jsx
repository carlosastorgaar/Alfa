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
    
    <div class="container">
  <div class="row">
    <div class="col-lg-7">
      <h2>Nivel inicial de alfabetización básica</h2>
      <WithLabelExample />

      <h2>Nivel Básico: Fundamentos de lectura y escritura.</h2>
      <WithLabelExample />

      <h2>Nivel Intermedio: Desarrollo de habilidades de comprensión y escritura.</h2>
      <WithLabelExample />

      <h2>Nivel Avanzado: Lectura, interpretación y producción de textos complejos.</h2>
      <WithLabelExample />
    </div>

    <div class="col-lg-5">
      <h2>Proceso de aprendizaje</h2>
      {vehicleList}
    </div>
  </div>
</div>

  
  
    
    </>

)
}

export default App
