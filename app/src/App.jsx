import { useState } from 'react'
import reactLogo from './assets/react.svg'
import alfaLogo from '/alfa.svg'
import './App.css'
import Nav from './Nav'
import Inicio from './Inicio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Nav />
      </div>
      
      <div>
        <Inicio />
      </div>
      
    </>
  )
}

export default App
