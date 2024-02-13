import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom';
import { Avatar, Tooltip } from '@chakra-ui/react';

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
        <div className='container mx-auto '>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 '>

                <div className='tracking-[1px] bg-slate-50 drop-shadow-[0_0px_8px_rgba(0,0,0,0.10)] dark:drop-shadow-[0_0px_5px_white] p-5 rounded-2xl flex flex-col gap-2'  >
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
                    <div className='flex gap-4 items-center '>
                        <Avatar size='2xl' name={usuario?.email} src={usuario?.photoURL} />
                        <div className='flex flex-col gap-2 '>
                            <strong className='text-[2rem]'>Bienvenido </strong>
                            <span className='text-[1.3rem] bg-red-100 p-2 rounded-md' >{usuario?.displayName || usuario?.email}</span>
                        </div>

                    </div>
                </div>

                <div className='tracking-[1px] bg-slate-50 drop-shadow-[0_0px_8px_rgba(0,0,0,0.10)] dark:drop-shadow-[0_0px_5px_white] p-5 rounded-2xl flex flex-col gap-2 '>
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
                            <img className='object-cover w-[100%] h-[100%]' src="" alt="img" />
                        </div>
                        <div className=' w-[70%] flex justify-between '>
                            <span className='overflow-hidden whitespace-nowrap overflow-ellipsis w-[50%]'>Nombre Porducto</span>
                            <span>$0.00</span>
                            <span>1</span>
                        </div>
                        <Tooltip hasArrow label='Remover producto' bg='gray.300' color='black'>
                            <button className='ml-3  px-2 rounded-md py-1  flex items-center'>
                                <lord-icon
                                    src="https://cdn.lordicon.com/uxddtfbd.json"
                                    trigger="hover"
                                    style={{ width: '2rem', height: '2rem' }}
                                >
                                </lord-icon></button>
                        </Tooltip>
                    </div>
                </div>

                <div className='bg-slate-300  '>
                    <strong>Puntos obtenidos</strong>
                </div>

                <div className='bg-slate-300 '>
                    <strong>Nivel de usuario</strong>
                </div>

            </div>
            <button onClick={handleClickCerrarSesion} className='bg-bunker-400 px-3 py-2 text-bunker-100 rounded-lg'>Sign Out</button>
        </div>
    )
}

export default Perfil