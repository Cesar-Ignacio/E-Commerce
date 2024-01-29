import React, { useEffect, useState } from 'react'


const useContador = (valorInicial, valorMaximo) => {


    const [contador, setContador] = useState(valorInicial);

    const sumar = () => {
        (contador + 1 <= valorMaximo) && setContador(contador + 1)
    }

    const restar = () => {
        (contador - 1 > 0) && setContador(contador - 1)
    }

    return {
        sumar,
        restar,
        contador

    }

}
const Contador = ({ stock, detectarCantidad }) => {

    const { sumar, restar, contador } = useContador(1, stock);

    useEffect(() => {
        detectarCantidad(contador)
    }, [contador])

    return (
        <div className='flex justify-between rounded-md overflow-hidden items-center  max-w-[6rem] border-solid border-[1px] border-amber-100 '>
            <button onClick={sumar} className=' text-[1.5rem]  w-[2rem] text-[#0fbdae] transition-colors duration-200 ease-in-out'>+</button>
            <span className='text-[1.2rem] text-white font-bold' >{contador}</span>
            <button onClick={restar} className=' text-[1.5rem]  w-[2rem] hover:text-[#0fbdae] transition-colors duration-200 ease-in-out'>-</button>
        </div>

    )
}

export default Contador
