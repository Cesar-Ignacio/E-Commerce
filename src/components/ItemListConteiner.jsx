import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../dataBase/dataBase'
import { MagicMotion } from 'react-magic-motion'

const ItemListConteiner = () => {

  const [datos, setDatos] = useState([])

  const { categoria } = useParams();

  

  useEffect(() => {

    const q = query(collection(db, "productos"), categoria && (where("categoria", ("=="), categoria || "")))
    getDocs(q)
      .then(results => {
        const productos = results.docs.map(doc => {
          return { id: doc.id, ...doc.data() }
        })
        setDatos(productos);
      })


  }, [categoria])


  return (
    <MagicMotion>
      <div className='container mx-auto'>
        <ItemList productos={datos} />
      </div>
    </MagicMotion>
  )
}

export default ItemListConteiner
