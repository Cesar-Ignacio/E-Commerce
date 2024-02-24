import React, { useContext } from 'react'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchContext } from '../context/SearchContext'
const Buscador = () => {

    const { buscarPorAngolia } = useContext(SearchContext);

 

    const handleChange = ({ target: { value } }) => {
        buscarPorAngolia(value);
    }


    return (
        <div className='container mx-auto flex justify-center mb-5'>
            <InputGroup style={{ width: '40%' }}>
                <InputLeftElement pointerEvents='none'>
                    <iframe className='w-8 h-8' src="https://lottie.host/embed/4f03eec5-aed1-4d91-8bed-004d162a6aef/4sZyphQMCT.json"></iframe>
                </InputLeftElement>
                <Input type='search' color='#2cc1ff' isInvalid errorBorderColor='#2cc1ff' placeholder='Que buscas' onChange={handleChange} />
            </InputGroup>
        </div>
    )
}

export default Buscador
