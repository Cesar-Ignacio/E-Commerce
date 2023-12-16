import React from 'react'
import "./NarBar.css";
const NarBar = () => {
    return (
        <nav className="navBar">
            <div className="infoLocal">
                <ul>
                    <li>UNITED KINGDOM</li>
                    <li>STORE LOCATOR</li>
                    <li>HELP</li>
                </ul>
            </div>
            <div className="logito">
                <h2>Logito</h2>
            </div>
            <div className="loginCarrito">
                <ul>
                    <li>LOGIN</li>
                    <li>REGISTER</li>
                </ul>
                <div>
                    carrito
                </div>
                <div>
                    busc
                </div>
            </div>
        </nav>
    )
}

export default NarBar
