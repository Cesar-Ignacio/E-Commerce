import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { MagicMotion } from 'react-magic-motion';
import { Avatar } from '@chakra-ui/react';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';
import carritoVacio from '../assets/carritoVacio.svg'

const Carrito = () => {

  const { carrito, obtenerTotalYCantidad, eliminarProductoId, vaciarCarrito } = useContext(CartContext);

  const { total, cantidad } = obtenerTotalYCantidad();

  const { usuario } = useContext(UserContext);

  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  gap-5 tracking-[1px]'>

      <Link  to={ usuario?.email ? `/perfil/${usuario.uid}`:"/Login"} className='tracking-[1px] flex flex-col items-center justify-center gap-4 p-5 bg-slate-50  rounded-2xl drop-shadow-[0_0px_8px_rgba(0,0,0,0.10)] dark:drop-shadow-[0_0px_5px_white] col-span-1 '>
        <Avatar size='xl' name={usuario?.email} src={usuario?.photoURL} />
        <div className='overflow-hidden whitespace-nowrap overflow-ellipsis'>
          <strong className='text-[1.2rem] text-slate-600 '>{usuario?.displayName|| usuario?.email|| "Inicia Sesion"}</strong>
        </div>
      </Link>
      
      <div className='flex flex-col gap-2 bg-slate-50 drop-shadow-[0_0px_8px_rgba(0,0,0,0.10)] dark:drop-shadow-[0_0px_5px_white] p-5 rounded-2xl ' >
        <div className='flex items-center gap-2'>
          <div className='rounded-lg bg-slate-800 p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-joystick w-[1.4rem] fill-white " viewBox="0 0 16 16">
              <path d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2" />
              <path d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23" />
            </svg>
          </div>
          <span className='text-slate-600'>Opciones de comprar</span>
        </div>
        <div className='flex flex-col gap-2 '>
          <Link to={"/checkout"} className='border-bunker-300 tracking-[1px] text-bunker-500 bg-bunker-100 hover:bg-bunker-900 hover:text-bunker-50 border-[1px]  p-2 rounded-md transition-colors duration-300 ease-in-out text-center'>Finalizar Comprar</Link>
          <button onClick={vaciarCarrito} className='border-bunker-300 tracking-[1px] text-bunker-500 bg-bunker-100 hover:bg-bunker-900 hover:text-bunker-50 border-[1px]  p-2 rounded-md transition-colors duration-300 ease-in-out' >Vaciar Carrito</button>
        </div>
      </div>

      <MagicMotion>

        <div className='drop-shadow-[0_0px_8px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_0px_5px_white] bg-slate-50  rounded-2xl p-5 flex flex-col gap-2 sm:col-span-2 xl:row-span-2'>
          <div className='flex items-center gap-2'>
            <div className='rounded-lg bg-slate-800 p-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-box-seam-fill w-[1.4rem] fill-white" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003zM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z" />
              </svg>
            </div>
            <span className='text-slate-600'>Productos de carrito</span>
          </div>
          {
            cantidad ? (carrito.map(producto => (
              (producto.email===usuario?.email)&&(
              <div key={producto.id} className='group/pro bg-stone-50 p-1 flex items-center gap-2'>
                <div className='w-[3rem] h-[3rem] rounded-[50%] overflow-hidden'>
                  <img className='object-cover w-[100%] h-[100%]' src={producto.url} alt="" />
                </div>
                <div className=' w-[70%] flex justify-between '>
                  <span className='overflow-hidden whitespace-nowrap overflow-ellipsis w-[50%]'>{producto.nombre}</span>
                  <span>${producto.precio}</span>
                  <span>{producto.cantidad}</span>
                </div>
                <button onClick={() => eliminarProductoId(producto.id)} className='ml-3'>
                  <lord-icon
                    src="https://cdn.lordicon.com/dykoqszm.json"
                    trigger="hover"
                    stroke="bold"
                    colors="primary:#121331,secondary:#16a9c7"
                    style={{ width: '2rem', height: '2rem' }}>
                  </lord-icon>
                </button>
              </div>)
            ))) : (
              <div className=' h-[100%] flex justify-center items-center '>
                <img className='w-[20rem]' src={carritoVacio } alt="img" />
              </div>
            )
          }

        </div>

        <div className='flex gap-2 flex-col drop-shadow-[0_0px_8px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_0px_5px_white] bg-slate-50 p-5 rounded-2xl  sm:col-span-2 '>
          <div className='flex items-center gap-2'>
            <div className='rounded-lg bg-slate-800 p-2'>
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
