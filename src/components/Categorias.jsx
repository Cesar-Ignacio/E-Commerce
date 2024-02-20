
import { Link } from "react-router-dom"

const Categorias = () => {

    return (
        <>
            <ol className='flex flex-col justify-evenly items-center sm:flex-row sm:h-auto '>
                <li className="text-bunker-400 hover:text-bunker-300  dark:text-bunker-100"><Link to="categoria/Parlantes" >PARLANTE</Link></li>
                <li className="text-bunker-400 hover:text-bunker-300 dark:text-bunker-100" ><Link to="categoria/Auriculares">AURICULARES</Link></li>
                <li className=" text-bunker-400 hover:text-bunker-300 dark:text-bunker-100" ><Link to="categoria/VideoJuegos">VIDEO JUEGOS</Link></li>
                <li className="text-bunker-400 hover:text-bunker-300 dark:text-bunker-100 "><Link to="categoria/Otros">OTROS</Link></li>
            </ol>

        </>
    )
}

export default Categorias
