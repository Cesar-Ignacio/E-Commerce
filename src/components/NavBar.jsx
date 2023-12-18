import React from 'react'
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className='navBarContenedor'>
            <div className='logito'>
                <h1>γάλα</h1>
            </div>
            <div className='contenedorIconos'>
                <ol>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                        </svg>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                    </li>
                    <li className='carrito'>
                        <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 4C10.4477 4 10 4.44772 10 5V6H14V5C14 4.44772 13.5523 4 13 4H11ZM16 6V5C16 3.34315 14.6569 2 13 2H11C9.34315 2 8 3.34315 8 5V6H4C2.89543 6 2 6.89543 2 8V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V8C22 6.89543 21.1046 6 20 6H16ZM9 8H4V19H20V8H15H9Z"  />
                        </svg>
                        <span>30</span>
                    </li>
                </ol>
            </div>
            <div className='categorias'>
                <ol>
                    <li><a href="">Mujeres</a></li>
                    <li><a href="">Hombres</a></li>
                    <li><a href="">Niños</a></li>
                </ol>
            </div>
        </nav>
    )
}

export default NavBar


