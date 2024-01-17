import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { recuperarListaDatos } from '../utilities/data'

const ItemListConteiner = ({ greenting }) => {

  const [datos, setDatos] = useState()


  useEffect(() => {

    recuperarListaDatos().then(data => setDatos(data));

  }, [])

  return (
    <div className='container mx-auto'>
      <h2>{greenting}</h2>
      <ItemList productos={datos} />
    </div>
  )
}

export default ItemListConteiner
