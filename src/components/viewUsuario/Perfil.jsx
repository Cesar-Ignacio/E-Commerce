import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom';
import { Avatar, Tooltip } from '@chakra-ui/react';
import auricular from '../../assets/auricular.webp'
const Perfil = () => {


    const { usuario, cerrarSesion } = useContext(UserContext);

    const navegacion = useNavigate();

    const handleClickCerrarSesion = async () => {
        try {
            await cerrarSesion()
            navegacion("/login")
        } catch (error) {
            console.log(error.code)
        }
    }

    return (
        <>
            <div className='container mx-auto mt-2'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 '>
                    <div className='tracking-[1px] bg-slate-50 drop-shadow-[0_0px_8px_rgba(0,0,0,0.10)] dark:drop-shadow-[0_0px_5px_white] p-5 rounded-2xl flex flex-col gap-2 sm:col-span-2'>
                        <div className='flex items-center gap-2'>
                            <div className='bg-slate-800 w-fit flex p-1 rounded-lg'>
                                <lord-icon
                                    src="https://cdn.lordicon.com/hrjifpbq.json"
                                    trigger="hover"
                                    colors="primary:#ffffff"
                                    style={{ width: '2rem', height: '2rem' }}>
                                </lord-icon>
                            </div>
                            <span className=' text-bunker-600'>Perfil de usuario</span>
                        </div>
                        <div className='flex gap-4 items-center justify-evenly '>
                            <div className='flex flex-col gap-2'>
                                <Avatar size='xl' name={usuario?.email} src={usuario?.photoURL} />
                                <button onClick={handleClickCerrarSesion} className='border-bunker-300 tracking-[1px] text-bunker-500 bg-bunker-100 hover:bg-bunker-900 hover:text-bunker-50 border-[1px]  p-2 rounded-md transition-colors duration-300 ease-in-out'>Sign Out</button>
                            </div>
                            <div className='flex flex-col gap-2  '>
                                <strong className='text-[2rem]'>Bienvenido </strong>
                                <strong className='text-[1.3rem] text-bunker-700' ><span className='text-blue-600'>#</span>  {usuario?.displayName || usuario?.email}</strong>
                            </div>

                        </div>
                    </div>

                    <div className='tracking-[1px] bg-slate-50 drop-shadow-[0_0px_8px_rgba(0,0,0,0.10)] dark:drop-shadow-[0_0px_5px_white] p-5 rounded-2xl flex flex-col gap-2  sm:col-span-2 lg:row-span-2' >
                        <div className='flex items-center gap-2'>
                            <div className='bg-slate-800 w-fit flex p-1 rounded-lg'>
                                <lord-icon
                                    src="https://cdn.lordicon.com/ulnswmkk.json"
                                    trigger="hover"
                                    colors="primary:#ffffff"
                                    style={{ width: '2rem', height: '2rem' }}>
                                </lord-icon>
                            </div>
                            <span className=' text-bunker-600'>Productos que te gustarón</span>
                        </div>

                        <div className='group/pro bg-stone-50 p-1 flex items-center gap-2'>
                            <div className='w-[3rem] h-[3rem] rounded-[50%] overflow-hidden'>
                                <img className='object-cover w-[100%] h-[100%]' src={auricular} alt="img" />
                            </div>
                            <div className=' w-[70%] flex justify-between '>
                                <span className='overflow-hidden whitespace-nowrap overflow-ellipsis w-[50%]'>Nombre Porducto</span>
                                <span>$0.00</span>
                                <span>1</span>
                            </div>
                            <Tooltip hasArrow label='Remover producto' bg='gray.300' color='black'>
                                <button className='ml-3'>
                                    <lord-icon
                                        src="https://cdn.lordicon.com/dykoqszm.json"
                                        trigger="hover"
                                        stroke="bold"
                                        colors="primary:#121331,secondary:#16a9c7"
                                        style={{width:'2rem',height:'2rem'}}>
                                    </lord-icon>
                                </button>
                            </Tooltip>
                        </div>
                    </div>

                    <div className='tracking-[1px] bg-slate-50 drop-shadow-[0_0px_8px_rgba(0,0,0,0.10)] dark:drop-shadow-[0_0px_5px_white] p-5 rounded-2xl flex flex-col gap-2 '>
                        <div className='flex items-center gap-2'>
                            <div className='bg-slate-800 w-fit flex p-1 rounded-lg'>
                                <lord-icon
                                    src="https://cdn.lordicon.com/iazmohzf.json"
                                    trigger="hover"
                                    colors="primary:#ffffff"
                                    style={{ width: '2rem', height: '2rem', }}>                                </lord-icon>
                            </div>
                            <span className=' text-bunker-600'>Nivel de usuario</span>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <lord-icon
                                src="https://cdn.lordicon.com/edbxxrcj.json"
                                trigger="morph"
                                style={{ width: '6rem', height: '6rem', }}>
                            </lord-icon>
                            <strong className='text-bunker-600'>PLATA</strong>
                        </div>
                    </div>

                    <div className='tracking-[1px] bg-slate-50 drop-shadow-[0_0px_8px_rgba(0,0,0,0.10)] dark:drop-shadow-[0_0px_5px_white] p-5 rounded-2xl flex flex-col gap-2 '>
                        <div className='flex items-center gap-2'>
                            <div className='bg-slate-800 w-fit flex p-1 rounded-lg'>
                                <lord-icon
                                    src="https://cdn.lordicon.com/sbrtyqxj.json"
                                    trigger="hover"
                                    colors="primary:#ffffff"
                                    style={{ width: '2rem', height: '2rem', }}>
                                </lord-icon>
                            </div>
                            <span className=' text-bunker-600'>Puntos obtenidos</span>
                        </div>
                        <div className='flex justify-center'>
                            <strong className='text-[5rem]'>250</strong>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Perfil