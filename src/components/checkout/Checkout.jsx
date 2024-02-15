import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../dataBase/dataBase'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Input, InputGroup, InputLeftAddon, InputLeftElement, } from '@chakra-ui/react'
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'

const schema = yup
    .object({
        nombreUsuario: yup.string().required(),
        telefono: yup.string().min(10).required(),
        mail: yup.string().email().required(),

    })
    .required()


const Checkout = () => {

    const { carrito, obtenerTotalYCantidad } = useContext(CartContext);

    const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(schema), })

    const { total } = obtenerTotalYCantidad();

    const onSubmit = (data) => {


        const orden = {
            usuario: data,
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
            <form onSubmit={handleSubmit(onSubmit)} className='bg-slate-50 p-2 flex gap-2 flex-col w-fit'>
                <div>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            {/* <EmailIcon color='gray-300' /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[1rem] fill-gray-900 bi bi-person-lines-fill " viewBox="0 0 16 16">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                            </svg>
                        </InputLeftElement>
                        <Input className="text-bunker-400" type='text'  {...register("nombreUsuario",)} value={"nombre usu"} />
                    </InputGroup>
                    <p role="alert" className="text-pink-500">{errors.nombreUsuario?.message}</p>
                </div>

                <div>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <EmailIcon color='gray-300' />
                        </InputLeftElement>
                        <Input className="text-bunker-400" type='email' placeholder='Email' {...register("mail",)} />
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
                        <Input className="text-bunker-400" type='number'   {...register("cantidad")} value={5} />
                    </InputGroup>
                    <p role='alert' className="text-pink-500" >{errors.cantidad?.message}</p>
                </div>

                <div>
                    <InputGroup >
                        <InputLeftAddon>
                            Total $
                        </InputLeftAddon>
                        <Input className="text-bunker-400" type='number'   {...register("monto")} value={"550"} />
                    </InputGroup>
                </div>

                <input type="submit" />
            </form>
        </div>
    )
}

export default Checkout
