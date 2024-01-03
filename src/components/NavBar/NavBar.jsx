import React from 'react'
import "./NavBar.css"
import CardWidget from '../CardWidget/CardWidget'
import SearchWidget from "../SearchWidget/SearchWidget";
import Menu from '../Menu/Menu';
import Categorias from '../Categorias';
const NavBar = () => {

    return (
        <header className='flex justify-center'>
            <nav className='grid grid-cols-3 w-full  xl:w-[1400px] ' >
                <div className='col-span-4 row-start-2 justify-self-center  sm:row-start-1 sm:col-start-2 sm:col-span-1'>
                    <h1 className='text-5xl tracking-[.30em] sm:text-4xl'>ZETA</h1>
                </div>
                <div className='navbarOpc  col-span-4 self-center  justify-self-end sm:col-start-3'>
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
                            <div className='flex justify-center  bg-slate-300 sm:hidden '>
                                <Menu />
                            </div>
                        </li>
                    </ol>
                </div>
                <div className='navbarCategorias  bg-slate-300 col-start-1 col-end-4 hidden sm:block'>
                    <Categorias />
                </div>
            </nav>
        </header>
    )
}

export default NavBar


