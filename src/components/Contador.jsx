import React, { useState } from 'react'


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
const Contador = ({ stock }) => {

    const { sumar, restar, contador } = useContador(1, stock);

    return (
        <div className='flex justify-between rounded-md overflow-hidden items-center  max-w-[6rem] border-solid border-[2px] '>
            <button onClick={sumar} className=' text-[1.5rem]  w-[2rem] hover:text-white transition-colors duration-200 ease-in-out'>+</button>
            <span className='text-[1.2rem] text-white font-bold' >{contador}</span>
            <button onClick={restar} className=' text-[1.5rem]  w-[2rem] hover:text-white transition-colors duration-200 ease-in-out'>-</button>
        </div>
    )
}

export default Contador
