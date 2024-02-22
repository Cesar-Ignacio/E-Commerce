import React from 'react'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { PhoneIcon, Search2Icon } from '@chakra-ui/icons'
const Buscador = () => {
    return (
        <div className='container mx-auto flex justify-center mb-5'>
            <InputGroup style={{ width: '40%' }}>
                <InputLeftElement pointerEvents='none'>
                    {/* <Search2Icon color='#2cc1ff'/> */}
                    <iframe className='w-8 h-8' src="https://lottie.host/embed/4f03eec5-aed1-4d91-8bed-004d162a6aef/4sZyphQMCT.json"></iframe>
                </InputLeftElement>
                <Input type='search' color='#2cc1ff' isInvalid errorBorderColor='#2cc1ff' placeholder='Que buscas' />
            </InputGroup>
        </div>
    )
}

export default Buscador
