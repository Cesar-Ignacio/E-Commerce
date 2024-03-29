import { useForm, } from "react-hook-form"
import { Button, Input, InputGroup, InputLeftElement, InputRightElement, useToast } from '@chakra-ui/react'
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { useContext, useState } from "react"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { UserContext } from "../../context/UserContext"
import { useNavigate, } from "react-router-dom"


const schema = yup
    .object({
        mail: yup.string().email().required(),
        password: yup.string().min(6).required(),
    })
    .required()

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm({ resolver: yupResolver(schema), })

    const [show, setShow] = useState(false)

    const [opcion, setOpcion] = useState();

    const toast = useToast();

    const navegacion = useNavigate();

    const { usuario } = useContext(UserContext);

    const { login, registrar, loginGoogle } = useContext(UserContext);

    const handleClick = () => setShow(!show)

    const onSubmit = async (data) => {

        switch (opcion) {
            case "login":
                try {
                    const { user } = await login(data.mail, data.password);
                    navegacion(`/perfil/${user.uid}`);
                } catch (error) {
                    toast({
                        title: 'Error al iniciar sesión',
                        description: 'Por favor, verifique su dirección de correo electrónico y contraseña.',
                        status: 'error',
                        duration: 4500,
                        isClosable: true,
                    })
                }
                break;
            case "signUp":
                try {
                    const { user } = await registrar(data.mail, data.password);
                    navegacion(`/perfil/${user.uid}`);
                } catch (error) {
                    toast({
                        title: 'Correo ya registrado',
                        description: 'Parece que ya tienes una cuenta con este correo electrónico.',
                        status: 'info',
                        duration: 4500,
                        isClosable: true,
                    })
                }
                break;
            default:
                break;
        }

    }

    const loginWithGoogle = async () => {
        try {
            const { user } = await loginGoogle();
            navegacion(`/perfil/${user.uid}`);

        } catch (error) {
            console.log(error.code)
        }
    }

    return (
        <div className='container mx-auto  flex flex-col items-center justify-center  gap-3'>

            <div className="bg-slate-50 drop-shadow-[0_0px_8px_rgba(0,0,0,0.10)] dark:drop-shadow-[0_0px_5px_white] p-5 sm:px-14 sm:py-7 rounded-2xl w-[80%] flex flex-col gap-4 sxm:w-[50%] lg:w-[35%]">
                <div className="flex flex-col gap-2">
                    <strong className="tracking-[2px] text-[1.5rem] text-bunker-900">Sign In</strong>
                    <p className="text-bunker-500 tracking-[1px]">Login to manage your account</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-4">
                    <div>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <EmailIcon color='gray-300' />
                            </InputLeftElement>
                            <Input className="text-bunker-400" type='email' placeholder='Email' {...register("mail",)} />
                        </InputGroup>
                        <p role="alert" className="text-pink-500">{errors.mail?.message}</p>
                    </div>
                    <div>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <LockIcon color='gray-300' />
                            </InputLeftElement>
                            <Input type={show ? 'text' : 'password'} placeholder='Password' {...register("password")} />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick} bg='transparent'>
                                    {show ? <ViewOffIcon /> : <ViewIcon />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <p role="alert" className="text-pink-500">{errors.password?.message}</p>

                    </div>
                    <div className="flex flex-col gap-2">
                        <button type="submit" onClick={() => setOpcion("login")} className="border-bunker-300 tracking-[1px] text-bunker-500 bg-bunker-100 hover:bg-bunker-900 hover:text-bunker-50 border-[1px]  p-2 rounded-md transition-colors duration-300 ease-in-out">Login</button>
                        <button type="submit" onClick={() => setOpcion("signUp")} className="border-bunker-300 tracking-[1px] text-bunker-500 bg-bunker-100 hover:bg-bunker-900 hover:text-bunker-50 border-[1px]  p-2 rounded-md transition-colors duration-300 ease-in-out">Sign Up</button>
                        <button type="button" onClick={loginWithGoogle} className="border-bunker-300 tracking-[1px] text-bunker-500 bg-bunker-100 hover:bg-bunker-900 hover:text-bunker-50 border-[1px]  p-2 rounded-md transition-colors duration-300 ease-in-out flex justify-center items-center gap-2">Sign In with
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-[1.3rem]" viewBox="0 0 48 48">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg>
                        </button>
                    </div>
                </form>

            </div>

            <div>
                <p className="font-bold tracking-[1px] text-bunker-900 dark:text-slate-50 ">Don't have an account? <span className="text-sky-500">Sign up</span> </p>
            </div>
        </div>

    )
}

export default Login
