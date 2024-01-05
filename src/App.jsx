import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListConteiner from './components/ItemListConteiner';
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
