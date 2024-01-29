import './App.css'
import NavBar from './components/NavBar'
import ItemListConteiner from './components/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Route, Routes, } from 'react-router-dom';
import Carrito from './components/Carrito';
import { CartProvider } from './context/CartContext';
function App() {

  return (
    <>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListConteiner greenting="ItemListConteiner" />} />
          <Route path='/categoria/:categoria' element={<ItemListConteiner greenting="ItemListConteiner" />} />
          <Route path='/detail/:idProducto' element={<ItemDetailContainer />} />
          <Route path='/Carrito' element={<Carrito />} />
        </Routes>
      </CartProvider>

    </>
  )
}

export default App
