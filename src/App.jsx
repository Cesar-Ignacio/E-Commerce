import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
// import ItemListConteiner from './components/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailContainer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      {/* <ItemListConteiner greenting="ItemListConteiner"/> */}
      <ItemDetailContainer/>
    </>
  )
}

export default App
