import { useState } from 'react'
import ItemListConteiner from './components/ItemListConteiner'
import NavBar from './components/NavBar/NavBar'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <ItemListConteiner greenting="ItemListConteiner"/>
    </>
  )
}

export default App
