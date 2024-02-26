import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='container mx-auto bg-bunker-800 pb-2 flex flex-col gap-3 '>
            {/* Logo */}
            <div className='flex justify-center border-b-2 border-bunker-300'>
                <Link to={"/"}>
                    <svg height="100" width="300">
                        <rect x="0" y="0" width="300" height="100" className='fill-transparent' />
                        <text x="150" y="60" font-family="Arial, sans-serif" font-weight="bold" font-size="36px" className='fill-curious-blue-400 dark:drop-shadow-[0_0px_20px_#0087d4]' text-anchor="middle">VivaGear</text>
                        <text x="150" y="90" font-family="Arial, sans-serif" font-weight="normal" font-size="24px" className='fill-bunker-400 dark:fill-bunker-50' text-anchor="middle">Tech</text>
                    </svg>
                </Link>
            </div>
            {/* Redes */}
            <div className='flex flex-col items-center gap-3'>
                <div className='flex gap-4 items-center'>
                    <a href="https://github.com/Cesar-Ignacio" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-github w-[1.5rem] fill-curious-blue-500" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                    </a>
                    <a href={"https://www.linkedin.com/in/cesarignacioaquino/"} target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-linkedin w-[1.5rem] fill-curious-blue-500" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                        </svg>
                    </a>
                    <a href="https://github.com/Cesar-Ignacio/E-Commerce" target="_blank" rel="noopener noreferrer" className='flex'>
                        <lord-icon
                            src="https://cdn.lordicon.com/rokunbup.json"
                            trigger="hover"
                            style={{ width: '2.5rem', height: '2.5rem' }}>
                        </lord-icon>
                    </a>
                    <a href="https://lordicon.com/" target="_blank" rel="noopener noreferrer" className='text-green-500'>Icons by Lordicon.com</a>
                </div>
                <span className='text-bunker-100'>© 2024 Cesar Aquino Tello</span>
            </div>
        </footer>
    )
}

export default Footer
