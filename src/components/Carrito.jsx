import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Carrito = () => {

  const { carrito, obtenerTotalYCantidad } = useContext(CartContext);

  const { total } = obtenerTotalYCantidad();

  return (
    <div className='container mx-auto mt-[3rem] grid grid-cols-1 md:grid-cols-2 gap-5'>
      <div className='bg-gray-400 p-2 rounded-lg '>
        <h2 className='text-[2rem]'>Carrito</h2>
      </div>

      <div className='drop-shadow-[0_0px_8px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_0px_8px_white] bg-red-50  rounded-lg row-span-2 p-2 flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
          <div className='rounded-lg bg-black p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-box-seam-fill w-[1.4rem] fill-white" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003zM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z" />
            </svg>
          </div>
          <span className='text-slate-600'>Productos de carrito</span>
        </div>
        {
          carrito.map(producto => (
            <div key={producto.id} className='group/pro bg-stone-50 p-1 flex items-center gap-2'>
              <div className='w-[3rem] h-[3rem] rounded-[50%] overflow-hidden'>
                <img className='object-cover w-[100%] h-[100%]' src={producto.url} alt="" />
              </div>
              <div className=' w-[70%] flex justify-between '>
                <span className='overflow-hidden whitespace-nowrap overflow-ellipsis w-[50%]'>{producto.nombre}</span>
                <span>{producto.precio}</span>
                <span>{producto.cantidad}</span>
              </div>
              <button className='opacity-0 text-slate-500 group-hover/pro:opacity-100 ml-3  bg-slate-100 px-2 rounded-md py-1 transition-all duration-300 ease-in-out flex items-center'>Eliminar <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-x w-[1rem] fill-red-400 scale-110 hover:scale-150  " viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg></button>
            </div>
          ))
        }
      </div>
      <div className='bg-gray-300 p-2 rounded-lg'>
        <strong>Total ${total} </strong>
      </div>
    </div>
  )
}

export default Carrito
