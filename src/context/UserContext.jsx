import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../dataBase/dataBase";

const UserContext = createContext();


const UserProvider = ({ children }) => {


    const [usuario, setUsuario] = useState();

    const login = (email, password) => signInWithEmailAndPassword(auth, email, password)

    const registrar = (email, password) => createUserWithEmailAndPassword(auth, email, password)

    const cerrarSesion=()=>signOut(auth);


    const loginGoogle=()=>{
        const gp=new GoogleAuthProvider();
        return signInWithPopup(auth,gp);
    }

    onAuthStateChanged(auth, user => {
        setUsuario(user)
    })


    return (
        <UserContext.Provider value={{ login, registrar, usuario,cerrarSesion,loginGoogle }}>
            {children}
        </UserContext.Provider>

    )

}


export { UserContext, UserProvider }
