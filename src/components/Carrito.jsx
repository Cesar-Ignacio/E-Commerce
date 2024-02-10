import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { MagicMotion } from 'react-magic-motion';

const Carrito = () => {

  const { carrito, obtenerTotalYCantidad, eliminarProductoId, vaciarCarrito } = useContext(CartContext);

  const { total, cantidad } = obtenerTotalYCantidad();


  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  gap-5'>

      <div className='flex items-center gap-4 bg-red-50 p-2 rounded-lg drop-shadow-[0_0px_8px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_0px_8px_white] col-span-1 '>
        <div className='p-1 w-[8rem] h-[8rem] overflow-hidden'>
          <img className='rounded-[50%] border-yellow-600 border-[0.2rem]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLwsRggneJ3NGJB1LkmqK0nCFVn7AkBtslvMyifIYzUhvhArdXzvMO7AQWBwcB028Lav4&usqp=CAU" alt="" />
        </div>
        <div className='flex flex-col'>
          <strong className='text-[1.2rem] text-slate-800'>Nombre Usurio</strong>
          <span>Punto: 400</span>
          <div className='flex items-center gap-2'>
            <span>Escudo</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[1rem] bi bi-nut-fill" viewBox="0 0 16 16">
              <path d="M4.58 1a1 1 0 0 0-.868.504l-3.428 6a1 1 0 0 0 0 .992l3.428 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 .868-.504l3.429-6a1 1 0 0 0 0-.992l-3.429-6A1 1 0 0 0 11.42 1zm5.018 9.696a3 3 0 1 1-3-5.196 3 3 0 0 1 3 5.196" />
            </svg>
          </div>
          <a href="" className='bg-red-200 text-slate-900 text-center rounded-lg mt-1 hover:bg-red-300'>Perfil</a>
        </div>
      </div>

      <div className='flex flex-col gap-2 bg-red-50 drop-shadow-[0_0px_8px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_0px_8px_white] p-2 rounded-lg ' >
        <div className='flex items-center gap-2'>
          <div className='rounded-lg bg-black p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-joystick w-[1.4rem] fill-white " viewBox="0 0 16 16">
              <path d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2" />
              <path d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23" />
            </svg>
          </div>
          <span className='text-slate-600'>Opciones de comprar</span>
        </div>
        <div className='flex flex-col gap-2 '>
          <button className='bg-slate-600 px-4 py-2 text-white rounded-lg  hover:bg-slate-500 transition-colors duration-300 ease-in-out'>Finalizar Comprar</button>
          <button onClick={vaciarCarrito} className='bg-slate-400 px-4 py-2 text-gray-900 rounded-lg hover:bg-slate-300 hover:text-red-500 transition-colors duration-300 ease-in-out' >Vaciar Carrito</button>
        </div>
      </div>

      <MagicMotion>

        <div className='drop-shadow-[0_0px_8px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_0px_8px_white] bg-red-50  rounded-lg p-2 flex flex-col gap-2 sm:col-span-2 xl:row-span-2'>
          <div className='flex items-center gap-2'>
            <div className='rounded-lg bg-black p-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-box-seam-fill w-[1.4rem] fill-white" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003zM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z" />
              </svg>
            </div>
            <span className='text-slate-600'>Productos de carrito</span>
          </div>

          {
            cantidad ? (carrito.map(producto => (

              <div key={producto.id} className='group/pro bg-stone-50 p-1 flex items-center gap-2'>
                <div className='w-[3rem] h-[3rem] rounded-[50%] overflow-hidden'>
                  <img className='object-cover w-[100%] h-[100%]' src={producto.url} alt="" />
                </div>
                <div className=' w-[70%] flex justify-between '>
                  <span className='overflow-hidden whitespace-nowrap overflow-ellipsis w-[50%]'>{producto.nombre}</span>
                  <span>${producto.precio}</span>
                  <span>{producto.cantidad}</span>
                </div>
                <button onClick={() => eliminarProductoId(producto.id)} className='opacity-0 text-slate-500 group-hover/pro:opacity-100 ml-3  bg-slate-100 px-2 rounded-md py-1 transition-all duration-300 ease-in-out flex items-center'>Eliminar <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-x w-[1rem] fill-red-400 scale-110 hover:scale-150  " viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg></button>
              </div>

            ))) : (
              <div className=' h-[100%] flex justify-center items-center '>
                <strong className='text-slate-400 text-[2rem]'>Carrito vacio</strong>
              </div>
            )
          }
        </div>

        <div className='flex gap-2 flex-col drop-shadow-[0_0px_8px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_0px_8px_white] bg-red-50 p-2 rounded-lg  sm:col-span-2 '>
          <div className='flex items-center gap-2'>
            <div className='rounded-lg bg-black p-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-gem w-[1.4rem] fill-white" viewBox="0 0 16 16">
                <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z" />
              </svg>
            </div>
            <span className='text-slate-600'>Detalles de comprar</span>
          </div>
          <div className='grid grid-cols-2  '>
            <div className=' flex flex-col items-center '>
              <span className='font-bold text-[5rem] text-slate-700 '>{cantidad || 0}</span>
              <span className='text-slate-500' >Cantidad Producto</span>
            </div>
            <div className=' flex flex-col items-center '>
              <span className='text-[5rem] font-bold text-slate-700'>${total || 0}</span>
              <span className='text-slate-500'>Total</span>
            </div>
          </div>
        </div>
      </MagicMotion>

    </div>

  )
}

export default Carrito
