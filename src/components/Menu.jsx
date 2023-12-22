import React,{useState}  from 'react'
import "./Menu.css"
import Modal from './Modal'
const Menu = () => {
    
    const [estado,setEstado]=useState(false);
    
    const cambioEstado=()=>{
        setEstado(!estado);
    }
    
    return (
        <>
        <button className='menu' onClick={cambioEstado}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            </svg>
        </button>
        {
            (estado)&&<Modal/>
        }
        
        </>
    )
}

export default Menu
