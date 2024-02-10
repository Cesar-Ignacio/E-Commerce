import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../dataBase/dataBase";

const UserContext = createContext();


const UserProvider = ({ children }) => {


    const [usuario, setUsuario] = useState();

    const login = (email, password) => signInWithEmailAndPassword(auth, email, password)

    const registrar = (email, password) => createUserWithEmailAndPassword(auth, email, password)

    onAuthStateChanged(auth, user => {
        
        console.log("Camnio el usuairop",user)
        setUsuario(user)

    })


    return (
        <UserContext.Provider value={{ login, registrar, usuario }}>
            {children}
        </UserContext.Provider>

    )

}


export { UserContext, UserProvider }
