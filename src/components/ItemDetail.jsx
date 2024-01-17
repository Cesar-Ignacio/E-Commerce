import React from 'react'

const ItemDetail = ({ producto }) => {
  return (
    <div className='bg-gradient-to-b sm:bg-gradient-to-r from-slate-800  gap-4 flex flex-col items-center justify-center  sm:rounded-[1.3rem] sm:flex-row '>
      <div className='xl:scale-110 w-[80%] h-[20rem] md:w-[50%] md:h-[30rem]'>
        <img src='https://i.postimg.cc/Qt6Wg69y/klipartz-com-2.png' className='w-[100%] h-[100%] object-contain' alt="img" />
      </div>
      <div className=' w-[80%] md:w-[50%]'>
        <strong className='text-[2rem] md:text-[5rem] text-rose-800 '>{producto.nombre}</strong>
        <p>{producto.descripcion} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quibusdam quis accusantium distinctio. Est, corrupti.</p>
        <strong className='text-[1.5rem]'>${producto.precio}</strong>
        <div className='mt-2 flex gap-2'>
          <button className='  bg-[#2a3445] p-2 md:px-8 md:py-3 rounded-xl  text-white w-fit h-fit'>BUY NOW</button>
          <button className='bg-[#2a3445] p-2 md:px-8 md:py-3 rounded-xl  text-white w-fit h-fit'>ADD TO CARD</button>
        </div>
      </div>

    </div>
  )
}

export default ItemDetail
