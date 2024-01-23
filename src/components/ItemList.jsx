import React, { useEffect, useState } from 'react'
import Item from './Item'


const ItemList = ({productos}) => {

    return (
        <div >
            <h2>ItemList Catálogo </h2>
            <div className='p-2 rounded-md grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ' >
                {
                    (productos) && (
                        productos.map(producto => (
                            <Item key={producto.id} producto={producto} />
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default ItemList
