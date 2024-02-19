import React, { useContext, useRef } from 'react'
import CardWidget from './CardWidget'
import SearchWidget from "./SearchWidget";
import Categorias from './Categorias';
import { Link } from 'react-router-dom';
import { Avatar, Button, WrapItem, useDisclosure, Input } from '@chakra-ui/react';
import { UserContext } from '../context/UserContext';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';
const NavBar = () => {

    const cambiarTema = () => {
        document.documentElement.classList.toggle('dark');
    }

    const { usuario } = useContext(UserContext);

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (
        <header className='border-b-2 border-bunker-400 mb-[2rem]'>
            <nav className='grid grid-cols-3  container mx-auto dark:text-bunker-100' >
                {/* LOGO */}
                <div className='col-span-4 row-start-2   sm:row-start-1  sm:col-start-1 sm:col-span-1  lg:col-start-2 justify-self-center '>
                    <Link to={"/"}>
                        <svg height="100" width="300">
                            <rect x="0" y="0" width="300" height="100" className='fill-transparent' />
                            <text x="150" y="60" font-family="Arial, sans-serif" font-weight="bold" font-size="36px" className='fill-curious-blue-400 dark:drop-shadow-[0_0px_20px_#0087d4]' text-anchor="middle">VivaGear</text>
                            <text x="150" y="90" font-family="Arial, sans-serif" font-weight="normal" font-size="24px" className='fill-bunker-400 dark:fill-bunker-50' text-anchor="middle">Tech</text>
                        </svg>
                    </Link>
                </div>
                {/* NAVEGADORES */}
                <div className=' col-span-4 self-center justify-self-center  sm:col-start-2 lg:col-start-3 p-[0.5em] ' >
                    <ol className='flex gap-[2.5rem] items-center'>

                        {/* <li className='flex'>
                            <SearchWidget />
                        </li> */}

                        {/* IconLogin */}
                        <Link to={usuario?.email ? (`/perfil/${usuario?.uid}`) : ("/login")} className='flex fill-bunker-700 dark:fill-bunker-200'>

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

                        {/* IconLinke */}
                        {
                            (usuario) && (
                                <Link to={usuario?.email ? (`/perfil/${usuario?.uid}`) : ("/login")} className='flex fill-bunker-700 dark:fill-bunker-200'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className=" w-[1.5rem] bi bi-heart" viewBox="0 0 16 16">
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                    </svg>
                                </Link>

                            )
                        }
                        {/* IconCarrito */}
                        <Link to={"carrito"} className='flex fill-bunker-700 dark:fill-bunker-200'>
                            <CardWidget />
                        </Link>
                        {/* IconTema */}
                        <li className='flex '>
                            <button onClick={cambiarTema}  >
                                <svg xmlns="http://www.w3.org/2000/svg"  class="bi bi-brightness-low-fill w-[1.4rem] fill-bunker-700 dark:fill-bunker-200 hover:rotate-180 transition-transform duration-300 ease-in-out'" viewBox="0 0 16 16">
                                    <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707m-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707m7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707M3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707" />
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button ref={btnRef} className='flex' onClick={onOpen}>
                                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-list w-[1.5rem]" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                                </svg>
                            </button>
                            <Drawer
                                isOpen={isOpen}
                                placement='right'
                                onClose={onClose}
                                finalFocusRef={btnRef}
                            >
                                <DrawerOverlay />
                                <DrawerContent >
                                    <DrawerCloseButton />
                                    <DrawerHeader>Create your account</DrawerHeader>

                                    <DrawerBody onClick={onClose}>
                                        <Input placeholder='Type here...' />
                                        <Categorias />
                                    </DrawerBody>

                                    <DrawerFooter>
                                        <Button variant='outline' mr={3} onClick={onClose}>
                                            Cancel
                                        </Button>
                                        <Button colorScheme='blue'>Save</Button>
                                    </DrawerFooter>
                                </DrawerContent>
                            </Drawer>
                        </li>
                    </ol>
                </div>
                {/* CATEGORÍAS */}
                <div className='col-start-1 col-end-4 hidden sm:block lg:w-[50%] container mx-auto pt-6  pb-3 text-[0.7rem] font-bold tracking-[2px] '>
                    <Categorias />
                </div>
            </nav>

        </header>
    )
}

export default NavBar


