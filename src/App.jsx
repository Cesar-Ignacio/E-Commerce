import './App.css'
import NavBar from './components/NavBar'
import ItemListConteiner from './components/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Route, Routes, } from 'react-router-dom';
import Carrito from './components/Carrito';
import { CartProvider } from './context/CartContext';
import Checkout from './components/checkout/Checkout';
import Login from './components/viewUsuario/Login'
import { UserProvider } from './context/UserContext';
import Perfil from './components/viewUsuario/Perfil';
import { LikedProductsProvider } from './context/LikedProductsContext';
import { CategoriaProvider } from './context/CategoriaContext';
import { SearchProvider } from './context/SearchContext';
import Footer from './components/footer/Footer';
function App() {

  return (
    <>

      <UserProvider>
        <CategoriaProvider>
          <LikedProductsProvider>
            <CartProvider>
              <SearchProvider>
                <div className='flex flex-col h-[100vh] gap-4'>
                  <div className='flex-1'>
                    <NavBar />
                    <Routes>
                      <Route path='/' element={<ItemListConteiner />} />
                      <Route path='/categoria/:categoria' element={<ItemListConteiner />} />
                      <Route path='/detail/:idProducto' element={<ItemDetailContainer />} />
                      <Route path='/perfil/:idUsuario' element={<Perfil />} />
                      <Route path='/login' element={<Login />} />
                      <Route path='/carrito' element={<Carrito />} />
                      <Route path='/checkout' element={<Checkout />} />
                      <Route path='*' element={<p>Pagina 404</p>} />
                    </Routes>
                  </div>
                  <div className='shrink-0 bg-bunker-800 '>
                    <Footer />
                  </div>
                </div>
              </SearchProvider>
            </CartProvider>
          </LikedProductsProvider>
        </CategoriaProvider>

      </UserProvider>

    </>
  )
}

export default App
