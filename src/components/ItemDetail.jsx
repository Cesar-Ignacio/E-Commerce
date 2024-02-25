import React, { useContext, useState } from 'react'
import Contador from './Contador'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { obtenerDescuento } from '../utilities/utilidades';
import { UserContext } from '../context/UserContext';
import { string } from 'yup';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const ItemDetail = ({ producto }) => {

  const { usuario } = useContext(UserContext);

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
    <div className='bg-gradient-to-b from-stone-900 bg-amber-50 p-2 gap-4 flex flex-col items-center justify-center  sm:rounded-[1.3rem] sm:flex-row drop-shadow-[0_0px_8px_rgba(0,0,0,0.25)]  dark:drop-shadow-[0px_0px_8px_#0fbdae] '>
      {/* Imagen de producto */}
      <div className='w-[90%] h-[20rem] md:w-[50%] md:h-[30rem] '>
        <img src={producto.url} className='w-[100%] h-[100%] object-contain  drop-shadow-[0rem_0rem_100px_#0fbdae] ' alt="img" />
      </div>
      {/* Detalles de producto */}
      <div className='flex flex-col gap-2 w-[95%] md:w-[50%] z-10'>
        <strong className='text-[1.8rem] md:text-[5rem] text-white drop-shadow-[0px_0px_2px_white] tracking-wide'>{producto.nombre}</strong>
        <p className='text-white'>{producto.descripcion}</p>

        {/* Show de precio */}
        <div className='flex items-center gap-2'>
          {estado && (<span className='text-gray-800 line-through text-md	'>${producto.precio}</span>)}
          <strong className='text-[1.5rem] text-bunker-800'>${precio}</strong>
        </div>

        <Contador stock={producto.stock} detectarCantidad={detectarCantidad} />



        < div className=' flex gap-2 items-center justify-evenly sm:justify-normal mt-5 tracking-[1px]'>
          {
            usuario ? (
              <>
                <Link onClick={agregarCarrito} to={"/checkout"} className=' text-bunker-950 border-[2px] 
                border-[#0fbdae]  hover:drop-shadow-[0px_0px_2px_#0fbdae]  px-3 py-2 rounded-[2rem] transition-all duration-300 ease-in-out flex items-center'>
                  <span className=' text-nowrap ' >Comprar ahora</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-chevron-right w-[1.2rem] fill-[#0fbdae]" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                  </svg>
                </Link>

                <Link  to={"/carrito"} onClick={handleClickAddPro} className=' text-bunker-950 border-[2px] 
                border-[#0fbdae]  hover:drop-shadow-[0px_0px_2px_#0fbdae]  px-3 py-2 rounded-[2rem] transition-all duration-300 ease-in-out flex items-center'>
                  <span className='text-nowrap' >Agregar Producto</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-chevron-right w-[1.2rem] fill-[#0fbdae]" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                  </svg>
                </Link>
              </>
            ) :
              (
                <Link to={"/login"} className='underline text-[#0fbdae] flex items-center hover:drop-shadow-[0px_0px_1px_white] ' >Quiero comprar este producto  <ExternalLinkIcon mx='2px' /> </Link>
              )
          }
        </div>


      </div>

    </div >
  )
}

export default ItemDetail
