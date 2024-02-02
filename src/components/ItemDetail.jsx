import React, { useContext, useState } from 'react'
import Contador from './Contador'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { obtenerDescuento } from '../utilities/utilidades';

const ItemDetail = ({ producto }) => {

  const { agregarProducto } = useContext(CartContext)
  const [cantidad, setCantidad] = useState(1);

  const detectarCantidad = (nuevaCantidad) => {
    setCantidad(nuevaCantidad);
  }

  const { estado, precio } = obtenerDescuento(producto.precio, producto.descuento);

  const agregarCarrito = () => {
    agregarProducto({ ...producto, precio, cantidad });
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
          <strong className='text-[1.5rem]'>${precio}</strong>
        </div>
        <Contador stock={producto.stock} detectarCantidad={detectarCantidad} />
        <div className=' flex gap-2 items-center justify-evenly sm:justify-normal'>
          <Link onClick={agregarCarrito} to={"/checkout"}  className='group/FiBuy bg-gradient-to-r from-stone-400 bg-slate-200 border-[1px] border-amber-100 hover:bg-slate-50 transition-all duration-300 ease-linear rounded-xl  px-2 py-2 flex items-center gap-1'>
            <span className=' text-nowrap ' >Comprar ahora</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[1rem]  group-hover/FiBuy:scale-125 group-hover/FiBuy:fill-[#0fbdae] transition-all duration-500 ease-in-out " viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
            </svg>
          </Link>
          <Link onClick={agregarCarrito} className=' group/FiBuy bg-gradient-to-r from-stone-400 bg-slate-100 border-[1px] border-amber-100   hover:bg-slate-50 transition-colors duration-300 ease-linear rounded-xl  px-2 py-2 flex items-center gap-1'>
            <span className='text-nowrap' >Agregar Producto</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[1rem]  group-hover/FiBuy:scale-125 group-hover/FiBuy:fill-[#0fbdae] transition-all duration-500 ease-in-out " viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
            </svg>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default ItemDetail
