import { useState } from 'react'
import Header from './components/Header'
import ItemListConteiner from './components/ItemListConteiner'

//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <ItemListConteiner greenting="ItemListConteiner"/>
    </>
  )
}

export default App
