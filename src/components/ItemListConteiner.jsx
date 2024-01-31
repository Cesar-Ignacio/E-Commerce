import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { recuperarListaDatos } from '../utilities/data'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import db from '../dataBase/dataBase'

const ItemListConteiner = ({ greenting }) => {

  const [datos, setDatos] = useState([])

  const { categoria } = useParams();


  useEffect(() => {

    // recuperarListaDatos().then(data => { setDatos(data.filter(pro => pro.categoria.includes(categoria || ""))) });

     const q=query(collection(db,"productos"),categoria&&(where("categoria",("=="),categoria||"")))
     getDocs(q)
     .then(results=>{
        const productos=results.docs.map(doc=>{
          return {id:doc.id,...doc.data()}
        })
        setDatos(productos);
     })


  }, [categoria])


  return (
    <div className='container mx-auto'>
      <h2>{greenting}</h2>
      <ItemList productos={datos} />
    </div>
  )
}

export default ItemListConteiner
