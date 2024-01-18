import React from 'react'
import CardWidget from './CardWidget'
import SearchWidget from "./SearchWidget";
import Categorias from './Categorias';
import Menu from './Menu';
import { Link } from 'react-router-dom';
const NavBar = () => {

    return (
        <header >
            <nav className='grid grid-cols-3   container mx-auto' >
                <div className='col-span-4 row-start-2 justify-self-center  sm:row-start-1  sm:col-start-1 sm:col-span-1  md:col-start-2 self-center'>
                    <Link to={"/"}><h1 className='text-4xl sm:text-3xl   tracking-[.30em]  font-bold '>ZETA</h1></Link> 
                </div>
                <div className='navbarOpc  col-span-4 self-center  justify-self-end sm:col-start-3 p-[0.2em] ' >
                    <ol className='flex gap-[2.5rem]'>
                        <li className='flex'>
                            <SearchWidget />
                        </li>
                        <li className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg"  class="w-[1.5rem] bi bi-person fill-black" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
                            </svg>
                        </li>
                        <li className='flex'>
                            <CardWidget />
                        </li>
                        <li className='flex'>
                            <div className='flex justify-center rounded-[0.2rem] bg-slate-200 sm:hidden '>
                                <Menu/>
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


