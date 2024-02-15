import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../dataBase/dataBase'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Input, InputGroup, InputLeftAddon, InputLeftElement, } from '@chakra-ui/react'
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { UserContext } from '../../context/UserContext'
import { DateTime } from "luxon";

const schema = yup
    .object({
        nombreUsuario: yup.string().required(),
        telefono: yup.string().min(10).required(),
        mail: yup.string().email().required(),

    })
    .required()


const Checkout = () => {


    const [ordenes, setOrdenes] = useState();

    const [estado, setEstado] = useState(true);

    const { carrito, obtenerTotalYCantidad, vaciarCarrito } = useContext(CartContext);

    const { usuario } = useContext(UserContext)

    const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(schema), })

    const { total, cantidad } = obtenerTotalYCantidad();

    const fecha = DateTime.local();


    const onSubmit = (data) => {

        const orden = {
            usuario: data,
            id: data.mail,
            comprar: [...carrito],
            fecha: fecha.setLocale('en').toFormat('LLLL dd, yyyy \'at\' HH:mm'),
            total
        }

        const ordenRef = collection(db, "ordenes")
       
        try {
            
            addDoc(ordenRef, orden)
                .then(res => console.log(res))
                
        } catch (error) {
            
            console.log("Su carrito no cuenta con productos")
        }


        setEstado(!estado);
        vaciarCarrito();

    }

    useEffect(() => {

        const q = query(collection(db, "ordenes"), where("id", "==", usuario?.email || " "))
        getDocs(q).then(({ docs }) => {
            const listaOrd = docs.map(p => { return { ...p.data(), id: p.id } })

            setOrdenes(listaOrd);
        })


    }, [estado, usuario])



    return (
        <div className='container mx-auto mt-5'>
            <div className='grid grid-cols-2 gap-5 '>
                <div className='tracking-[1px] bg-slate-50 drop-shadow-[0_0px_8px_rgba(0,0,0,0.10)] dark:drop-shadow-[0_0px_5px_white] p-5  rounded-2xl '>
                    <div className='flex items-center gap-2 mb-3'>
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
                    <form onSubmit={handleSubmit(onSubmit)} className='container mx-auto flex gap-2 flex-col w-fit'>
                        <div>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    {/* <EmailIcon color='gray-300' /> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[1rem] fill-gray-900 bi bi-person-lines-fill " viewBox="0 0 16 16">
                                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                                    </svg>
                                </InputLeftElement>
                                <Input className="text-bunker-400" type='text'  {...register("nombreUsuario",)} placeholder='Nombre Usuario' value={usuario?.displayName} />
                            </InputGroup>
                            <p role="alert" className="text-pink-500">{errors.nombreUsuario?.message}</p>
                        </div>

                        <div>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <EmailIcon color='gray-300' />
                                </InputLeftElement>
                                <Input className="text-bunker-400" type='email' placeholder='Email' {...register("mail",)} value={usuario?.email} />
                            </InputGroup>
                            <p role="alert" className="text-pink-500">{errors.mail?.message}</p>
                        </div>

                        <div>
                            <InputGroup >
                                <InputLeftElement pointerEvents='none'>
                                    <PhoneIcon color='gray-300' />
                                </InputLeftElement>
                                <Input type='tel' {...register("telefono")} placeholder='Phone number' />
                            </InputGroup>
                            <p role='alert' className="text-pink-500" >{errors.telefono?.message}</p>
                        </div>

                        <div>
                            <InputGroup >
                                <InputLeftAddon>
                                    cantidad productos
                                </InputLeftAddon>
                                <Input className="text-bunker-400" type='text'   {...register("cantidad")} value={carrito.length ? cantidad : ""} />
                            </InputGroup>
                            <p role='alert' className="text-pink-500" >{errors.cantidad?.message}</p>
                        </div>

                        <div>
                            <InputGroup >
                                <InputLeftAddon>
                                    Total $
                                </InputLeftAddon>
                                <Input className="text-bunker-400" type='text'   {...register("monto")} value={carrito.length ? total : ""} />
                            </InputGroup>
                        </div>
                        <button type="submit" className='border-bunker-300 tracking-[1px] text-bunker-500 bg-bunker-100 hover:bg-bunker-900 hover:text-bunker-50 border-[1px]  p-2 rounded-md transition-colors duration-300 ease-in-out'>Generar orden</button>
                    </form>
                </div>
                <div className='tracking-[1px] bg-slate-50 drop-shadow-[0_0px_8px_rgba(0,0,0,0.10)] dark:drop-shadow-[0_0px_5px_white] rounded-2xl p-5'>
                    <div className='flex items-center gap-2 mb-3'>
                        <div className='bg-slate-800 w-fit flex p-1 rounded-lg'>
                            <lord-icon
                                src="https://cdn.lordicon.com/hrjifpbq.json"
                                trigger="hover"
                                colors="primary:#ffffff"
                                style={{ width: '2rem', height: '2rem' }}>
                            </lord-icon>
                        </div>
                        <span className=' text-bunker-600'>Ordenes generadas</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        {
                            ordenes ? (
                                ordenes.map(ord => (
                                    <div key={ord.id} className='bg-red-100 flex justify-around'>
                                        <strong>{ord.id}</strong>
                                        <strong>{ord.fecha}</strong>
                                    </div>
                                ))
                            ) : (<strong>Cargar...</strong>)
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
