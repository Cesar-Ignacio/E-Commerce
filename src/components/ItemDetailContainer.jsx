import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { productoPorId } from '../utilities/data';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState();

    const {idProducto}=useParams();

    useEffect(() => {

        productoPorId(idProducto).then(data => setProducto(data)).catch(error => console.log(error));

    }, [])


    return (
        <div className='container mx-auto mt-4'>
            <h3>ItemDetailContainer </h3>
            {producto&&<ItemDetail producto={producto} />}
        </div>
    )
}

export default ItemDetailContainer
