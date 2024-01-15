import React from 'react'
import ItemList from './ItemList'

const ItemListConteiner = ({greenting}) => {
  return (
    <div className='container mx-auto'>
        <h2>{greenting}</h2>
        <ItemList/>
    </div>
  )
}

export default ItemListConteiner
