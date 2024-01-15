import React, { useState } from 'react'
import Categorias from './Categorias';
const Menu = () => {

    const [estado, setEstado] = useState(false);

    const cambioEstado = () => {
        setEstado(!estado);
    }

    return (
        <>
            <button className='z-10' onClick={cambioEstado}>
                <svg xmlns="http://www.w3.org/2000/svg"  class=" w-[1.5rem]  transition-all ease-in-out hover:drop-shadow-lg  hover:scale-[1.1]" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                </svg>
            </button>
            {
                (estado) && (<div className=' absolute top-0 w-[100%] h-[100%] left-0 flex flex-col  items-center bg-slate-50/90 z-10'>
                    <button className='h-[20%]'  onClick={cambioEstado}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-[2rem] hover:fill-red-500 hover:scale-150 transition-all ease-in-out" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg></button>
                    <div className='headerModal'>
                        <span></span>
                    </div>
                    <Categorias />
                    <div className='footerModal'>
                        <span></span>
                    </div>
                </div>)

            }
        </>
    )
}

export default Menu
