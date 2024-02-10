import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../dataBase/dataBase'


const Checkout = () => {
    const [datos, setDatos] = useState({
        nombre: '',
        telefono: '',
        email: ''
    })


    const { carrito, obtenerTotalYCantidad } = useContext(CartContext);

    const { total } = obtenerTotalYCantidad();

    const modificionDatos = ({ target: { value, name } }) => {
        setDatos({ ...datos, [name]: value })

    }

    const enviarDatos = (e) => {

        e.preventDefault();

        const orden = {
            usuario: datos,
            comprar: [...carrito],
            total
        }

        const ordenRef = collection(db, "ordenes");
        addDoc(ordenRef, orden)
            .then(res => console.log(res));


    }


    return (
        <div className='container mx-auto mt-5'>
            <h1>Checkout</h1>
            <form onSubmit={enviarDatos} className='flex flex-col gap-2'>
                <label htmlFor="">
                    Nombre:
                    <input type="text" name="nombre" value={datos.nombre} onChange={modificionDatos} className='border-solid border-black border-[1px]' />
                </label>
                <label htmlFor="">
                    Teléfono
                    <input type="tel" name="telefono" value={datos.telefono} onChange={modificionDatos} className='border-solid border-black border-[1px]' />
                </label>
                <label htmlFor="">
                    Email
                    <input type="email" name="email" value={datos.email} onChange={modificionDatos} className='border-solid border-black border-[1px]' />
                </label>
                <button className='bg-slate-300 w-fit px-3 py-1' >Eviar</button>
            </form>

        </div>
    )
}

export default Checkout
