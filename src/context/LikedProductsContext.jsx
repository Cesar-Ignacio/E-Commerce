import { createContext, useState } from "react";

const LikedProductsContext = createContext();


const LikedProductsProvider = ({ children }) => {

    const [productoLiked, setProductoLiked] = useState(JSON.parse(localStorage.getItem('productoMegusta')) || []);

    const addProducto = (producto) => {
        
        
        if (!existeProducto(producto)) {
            productoLiked.push(producto)
            localStorage.setItem('productoMegusta', JSON.stringify(productoLiked))
            setProductoLiked([...JSON.parse(localStorage.getItem("productoMegusta"))])
        }
    }

    const existeProducto = ({ email, id }) => {
        return productoLiked.some(pro => (pro.email + pro.id) === (email + id))
    }


    const delProducto = ({ email, id }) => {

        const nuevoArray = productoLiked.filter(pro => (pro.email + pro.id) !== (email + id))

        localStorage.setItem('productoMegusta', JSON.stringify(nuevoArray))

        setProductoLiked([...JSON.parse(localStorage.getItem("productoMegusta"))])

    }

    return (
        <LikedProductsContext.Provider value={{ addProducto, productoLiked, delProducto }}>
            {children}
        </LikedProductsContext.Provider>
    )

}

export { LikedProductsContext, LikedProductsProvider }