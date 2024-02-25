import { collection, getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../dataBase/dataBase";

const CategoriasContext=createContext();


const CategoriaProvider=({children})=>{

    const [categorias,setCategorias]=useState();


    useEffect(()=>{
        const q=collection(db,"categorias");
        getDocs(q).then(({docs})=>
        {
            const nuevoLista=docs.map(cat=>{
                return {...cat.data(),id:cat.id}
            })

           setCategorias(nuevoLista);
        })
    },[]);


    return(
        <CategoriasContext.Provider value={{categorias}}>
            {children}
        </CategoriasContext.Provider>
    )

}

export {CategoriaProvider,CategoriasContext}