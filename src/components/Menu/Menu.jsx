import React, { useState } from 'react'
import "./Menu.css"
import Categorias from '../Categorias';
const Menu = () => {

    const [estado, setEstado] = useState(false);

    const cambioEstado = () => {
        setEstado(!estado);
    }

    return (
        <>
            <button className='btnMenu' onClick={cambioEstado}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                </svg>
            </button>
            {
                (estado) && (<div className='modal'>
                    <button className='btnCerrar' onClick={cambioEstado}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
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
