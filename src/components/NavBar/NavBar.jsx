import React from 'react'
import "./NavBar.css"
import CardWidget from '../CardWidget/CardWidget'
import SearchWidget from "../SearchWidget/SearchWidget";
import Menu from '../Menu/Menu';
import Categorias from '../Categorias';
const NavBar = () => {
    
    return (
        <header className='flex justify-center'>
            <nav className='navbar bg-green-200 grid grid-cols-3 w-full  xl:w-[1400px] xl:bg-blue-200' >
                <div className='navbarLogito  col-start-2 '>
                    <h1>ZETA</h1>
                </div>
                <div className='navbarOpc  col-start-3'>
                    <ol>
                        <li>
                            <SearchWidget />
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
                            </svg>
                        </li>
                        <li>
                            <CardWidget />
                        </li>
                        <li>
                            <Menu />
                        </li>
                    </ol>
                </div>
                <div className='navbarCategorias bg-red-700   col-start-1 col-end-4'>
                    <Categorias />
                </div>
            </nav>
        </header>
    )
}

export default NavBar


