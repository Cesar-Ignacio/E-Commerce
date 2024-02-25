import React, { useContext, useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../dataBase/dataBase'
import { MagicMotion } from 'react-magic-motion'
import { SearchContext } from '../context/SearchContext'
import Buscador from './Buscador'


const ItemListConteiner = () => {

  const [datos, setDatos] = useState([])

  const { categoria } = useParams();

  const { searchPro } = useContext(SearchContext);

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

  useEffect(()=>{
    
    setDatos(searchPro);

  },[searchPro])

  

  return (
    <>
      <MagicMotion>
        <Buscador/>
        <div className='container mx-auto'>
          <ItemList productos={datos} />
        </div>

      </MagicMotion>
    </>
  )
}

export default ItemListConteiner
