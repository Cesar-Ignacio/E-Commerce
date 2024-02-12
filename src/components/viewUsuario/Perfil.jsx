import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { Link, useNavigate } from 'react-router-dom';

const Perfil = () => {


    const { usuario, cerrarSesion } = useContext(UserContext);

    const navegacion=useNavigate();

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
            <h2>Perfil de usuario</h2>
            <h1>Bienvenido {usuario?.email}</h1>
            <button onClick={handleClickCerrarSesion} className='bg-slate-600 text-white px-2 py-1'>Sign Out</button>
            
        </div>
    )
}

export default Perfil