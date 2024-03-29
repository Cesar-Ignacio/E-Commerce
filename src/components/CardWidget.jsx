import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const CardWidget = () => {


    const {obtenerTotalYCantidad}=useContext(CartContext)

    const {cantidad}=obtenerTotalYCantidad();
    return (
        <div className='relative  flex justify-center self-center'>
            <svg  viewBox="0 0 24 24" className='w-[1.5rem]' xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 4C10.4477 4 10 4.44772 10 5V6H14V5C14 4.44772 13.5523 4 13 4H11ZM16 6V5C16 3.34315 14.6569 2 13 2H11C9.34315 2 8 3.34315 8 5V6H4C2.89543 6 2 6.89543 2 8V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V8C22 6.89543 21.1046 6 20 6H16ZM9 8H4V19H20V8H15H9Z" />
            </svg>
            <span className='absolute text-[0.7rem] pt-[0.3rem]'>{cantidad}</span>
        </div>
        
    )
}

export default CardWidget
