import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import {recuperarDatos}from '../utilities/data';

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({});

    useEffect(() => {

        recuperarDatos(101).then(data=>setProducto(data)).catch(error=>console.log(error));

    }, [])


    return (
        <div className='container mx-auto'>
            <h3>ItemDetailContainer</h3>
            <p>{ (producto.descripcion)||"No se encontro el producto"}</p>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer
