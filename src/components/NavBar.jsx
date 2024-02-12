import React, { useContext } from 'react'
import CardWidget from './CardWidget'
import SearchWidget from "./SearchWidget";
import Categorias from './Categorias';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import { Avatar, WrapItem } from '@chakra-ui/react';
import { UserContext } from '../context/UserContext';

const NavBar = () => {

    const cambiarTema = () => {
        document.documentElement.classList.toggle('dark');
    }

    const { usuario } = useContext(UserContext);

    return (
        <header className='border-b-2 border-bunker-400 mb-[2rem]'>
            <nav className='grid grid-cols-3  container mx-auto dark:text-bunker-100' >
                <div className='col-span-4 row-start-2 justify-self-center  sm:row-start-1  sm:col-start-1 sm:col-span-1  lg:col-start-2 self-center'>
                    <Link to={"/"}>
                        <svg height="100" width="300">
                            <rect x="0" y="0" width="300" height="100" className='fill-transparent' />
                            <text x="150" y="60" font-family="Arial, sans-serif" font-weight="bold" font-size="36px" fill="#00a0e9" text-anchor="middle">VivaGear</text>
                            <text x="150" y="90" font-family="Arial, sans-serif" font-weight="normal" font-size="24px" className='fill-bunker-400 dark:fill-bunker-50' text-anchor="middle">Tech</text>
                        </svg>
                    </Link>
                </div>
                <div className=' col-span-4 self-center justify-self-end sm:col-start-3 p-[0.2em] ' >
                    <ol className='flex gap-[2.5rem] items-center'>
                        <li className='flex'>
                            <SearchWidget />
                        </li>
                        <Link to={usuario?.email?(`/perfil/${usuario?.uid}`):("/login")} className='flex dark:fill-bunker-50'>

                            {usuario?.email ? (
                                <WrapItem>
                                    <Avatar name={usuario.email} size='sm' src={usuario?.photoURL} />
                                </WrapItem>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-[1.5rem] bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
                                </svg>
                            )
                            }
                        </Link>
                        <Link to={"carrito"} className='flex dark:fill-bunker-50'>
                            <CardWidget />
                        </Link>
                        <li className='flex '>
                            <button onClick={cambiarTema} >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-brightness-low-fill w-[1.4rem]" viewBox="0 0 16 16">
                                    <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707m-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707m7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707M3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707" />
                                </svg>
                            </button>
                        </li>
                        <li className='flex'>
                            <div className='flex justify-center rounded-[0.2rem] bg-slate-200 sm:hidden '>
                                <Menu />
                            </div>
                        </li>
                    </ol>
                </div>
                <div className='col-start-1 col-end-4 hidden sm:block lg:w-[50%] container mx-auto pt-6  pb-3 text-[0.7rem] font-bold tracking-[2px] '>
                    <Categorias />
                </div>
            </nav>
        </header>
    )
}

export default NavBar


