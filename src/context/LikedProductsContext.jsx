import { createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";

const LikedProductsContext = createContext();


const LikedProductsProvider = ({ children }) => {


    const {usuario}=useContext(UserContext);

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

    const cantidadProUsu=productoLiked.filter(pro=>pro.email===usuario?.email)

    return (
        <LikedProductsContext.Provider value={{ addProducto, productoLiked, delProducto,cantidadProUsu}}>
            {children}
        </LikedProductsContext.Provider>
    )

}

export { LikedProductsContext, LikedProductsProvider }