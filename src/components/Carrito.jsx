import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Carrito = () => {

  const { carrito,obtenerTotalYCantidad } = useContext(CartContext);

  const {total}=obtenerTotalYCantidad();

  return (
    <div className='container mx-auto mt-[1rem]'>
      <h2>Carrito</h2>
      <div>
        {
          carrito.map(producto => (
            <div key={producto.id}  >
              <strong>{producto.nombre} ${producto.precio} {producto.cantidad}</strong>
            </div>
          ))
        }
      </div>
      <div className='bg-gray-400'>
        <strong>Total ${total} </strong>
      </div>
    </div>
  )
}

export default Carrito
