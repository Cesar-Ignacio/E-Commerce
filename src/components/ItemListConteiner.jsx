import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { recuperarListaDatos } from '../utilities/data'
import { useParams } from 'react-router-dom'

const ItemListConteiner = ({ greenting }) => {

  const [datos, setDatos] = useState()

  const { categoria } = useParams();

  useEffect(() => {

    recuperarListaDatos().then(data => { setDatos(data.filter(pro => pro.categoria.includes(categoria || ""))) });

  }, [categoria])


  return (
    <div className='container mx-auto'>
      <h2>{greenting}</h2>
      <ItemList productos={datos} />
    </div>
  )
}

export default ItemListConteiner
