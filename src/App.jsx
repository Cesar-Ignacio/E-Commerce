import './App.css'
import NavBar from './components/NavBar'
import ItemListConteiner from './components/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Route, Routes, } from 'react-router-dom';
function App() {
  
  return (
    <>
      <NavBar/>

      <Routes>
          <Route path='/' element={<ItemListConteiner greenting="ItemListConteiner"/>} />
          <Route path='/categoria/:categoria' element={<ItemListConteiner greenting="ItemListConteiner"/>}/>
          <Route path='/detail/:idProducto' element={<ItemDetailContainer/>}/>
      </Routes>

      
    </>
  )
}

export default App
