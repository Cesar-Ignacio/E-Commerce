import React, { useContext, useState } from 'react'
import Contador from './Contador'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { obtenerDescuento } from '../utilities/utilidades';

const ItemDetail = ({ producto }) => {

  const { agregarProducto, validarProducto } = useContext(CartContext)
  const [cantidad, setCantidad] = useState(1);

  const detectarCantidad = (nuevaCantidad) => {
    setCantidad(nuevaCantidad);
  }

  const { estado, precio } = obtenerDescuento(producto.precio, producto.descuento);

  const agregarCarrito = () => {
    agregarProducto({ ...producto, precio, cantidad });
  }

  const handleClickAddPro = () => {

    const estadoVerificacion = validarProducto({ ...producto, cantidad });
    (estadoVerificacion) ? agregarProducto({ ...producto, precio, cantidad }) : console.log("Cantidad > Stock")
  }


  return (
    <div className='bg-gradient-to-b from-stone-900 bg-amber-50 p-2 gap-4 flex flex-col items-center justify-center  sm:rounded-[1.3rem] sm:flex-row  '>
      <div className='w-[90%] h-[20rem] md:w-[50%] md:h-[30rem] '>
        <img src={producto.url} className='w-[100%] h-[100%] object-contain  drop-shadow-[0rem_0rem_100px_#0fbdae] ' alt="img" />
      </div>
      <div className='flex flex-col gap-2 w-[95%] md:w-[50%] z-10'>
        <strong className='text-[1.8rem] md:text-[5rem] text-white'>{producto.nombre}</strong>
        <p className='text-white'>{producto.descripcion}</p>
        <div className='flex items-center gap-2'>
          {estado && (<span className='text-gray-800 line-through text-md	'>${producto.precio}</span>)}
          <strong className='text-[1.5rem] text-bunker-800'>${precio}</strong>
        </div>
        <Contador stock={producto.stock} detectarCantidad={detectarCantidad} />
        <div className=' flex gap-2 items-center justify-evenly sm:justify-normal'>
          <Link onClick={agregarCarrito} to={"/checkout"} className='drop-shadow-[0rem_0rem_3px_#1f1e1c] text-bunker-50 border-[1px] hover:drop-shadow-[-2px_-2px_2px_#262523] tracking-[1px] px-3 py-2 rounded-[2rem] transition-all duration-300 ease-in-out flex items-center'>
            <span className=' text-nowrap ' >Comprar ahora</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-chevron-right w-[1.2rem] fill-[#0fbdae]" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
            </svg>
          </Link>
          <Link onClick={handleClickAddPro} className='drop-shadow-[0rem_0rem_3px_#1f1e1c] text-bunker-50 border-[1px] hover:drop-shadow-[-2px_-2px_2px_#262523] tracking-[1px] px-3 py-2 rounded-[2rem] transition-all duration-300 ease-in-out flex items-center'>
            <span className='text-nowrap' >Agregar Producto</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-chevron-right w-[1.2rem] fill-[#0fbdae]" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
            </svg>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default ItemDetail
