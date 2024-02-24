import { createContext, useState } from "react";
import algoliasearch from 'algoliasearch'

const SearchContext=createContext();


const SearchProvider=({children})=>{


    const [searchPro,setSearchPro]=useState();

    const client = algoliasearch('J5O47PA6G0', 'ae4c8fe31cc6d33b9ce4adc190191212')

    const index = client.initIndex('pruebaV1')


    
    const buscarPorAngolia = async (value) => {
        const { hits } = await index.search(value, {
            hitsPerPage: 10
        })

        const nuevoArray = hits.map(hit => {
            const {categoria,descripcion,descuento,id,nombre,precio,stock,url}=hit;
            return {categoria,descuento,descripcion,id,nombre,precio,stock,url}
        })

        setSearchPro(nuevoArray);

    }

    return(
        <SearchContext.Provider value={{index,buscarPorAngolia,searchPro}}>
            {children}
        </SearchContext.Provider>
    )

}

export {SearchContext,SearchProvider}