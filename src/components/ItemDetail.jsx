import React from 'react'
import Contador from './Contador'

const ItemDetail = ({ producto }) => {
 
  // sm:bg-gradient-to-r
  return (
    <div className='bg-gradient-to-b from-stone-900 p-2   gap-4 flex flex-col items-center justify-center  sm:rounded-[1.3rem] sm:flex-row  '>
      <div className='w-[80%] h-[20rem] md:w-[50%] md:h-[30rem] '>
        <img src={producto.url} className='w-[100%] h-[100%] object-contain  drop-shadow-[0rem_0rem_100px_#0fbdae] ' alt="img" />
      </div>
      <div className=' w-[80%] md:w-[50%] z-10'>
        <strong className='text-[2rem] md:text-[5rem] text-white'>{producto.nombre}</strong>
        <p>{producto.descripcion} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quibusdam quis accusantium distinctio. Est, corrupti.</p>
        <strong className='text-[1.5rem]'>${producto.precio}</strong>
        <Contador/>
        <div className='mt-2 flex gap-2'>
          <button className='  bg-[#2a3445] p-2 md:px-8 md:py-3 rounded-xl  text-white w-fit h-fit'>BUY NOW</button>
          <button className='bg-[#2a3445] p-2 md:px-8 md:py-3 rounded-xl  text-white w-fit h-fit'>ADD TO CARD</button>
        </div>
      </div>
      
    </div>
  )
}

export default ItemDetail
