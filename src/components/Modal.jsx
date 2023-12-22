import React from 'react'
import "./Modal.css";
import SearchWidget from './SearchWidget';
import Categorias from './Categorias';

const Modal = () => {
    return (
        <div className='modal'>
            <button className='cerrar'>X</button>
            <div className='headerModal'>
                <span>Header</span>
            </div>
            
            <Categorias/>                        

            <div className='footerModal'>
                <span>Footer</span>
            </div>
        </div>
    )
}

export default Modal
