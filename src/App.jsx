import './App.css'
import NavBar from './components/NavBar'
import ItemListConteiner from './components/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Route, Routes, } from 'react-router-dom';
import Carrito from './components/Carrito';
import { CartProvider } from './context/CartContext';
import Checkout from './components/checkout/Checkout';
function App() {

  return (
    <>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListConteiner greenting="ItemListConteiner" />} />
          <Route path='/categoria/:categoria' element={<ItemListConteiner />} />
          <Route path='/detail/:idProducto' element={<ItemDetailContainer />} />
          <Route path='/carrito' element={<Carrito />} />
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<p>Pagina 404</p>} />
        </Routes>
      </CartProvider>

    </>
  )
}

export default App
