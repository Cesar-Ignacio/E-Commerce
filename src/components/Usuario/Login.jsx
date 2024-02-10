import { useForm, } from "react-hook-form"
import { Button, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { useState } from "react"

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()

    const [show, setShow] = useState(false)

    const onSubmit = (data) => console.log(data)


    const handleClick = () => setShow(!show)

    return (
        <div className='container mx-auto  flex flex-col items-center justify-center  gap-3'>
            <div>
                <strong>Logo</strong>
            </div>

            <div className="bg-slate-400 px-14 py-7 rounded-2xl w-[80%] flex flex-col gap-4 sm:w-[50%] lg:w-[35%]">
                <div className="flex flex-col gap-2">
                    <strong className="text-[1.5rem]">Sign In</strong>
                    <p>Login to manage your account</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-4">

                    <div>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <EmailIcon color='gray-300' />
                            </InputLeftElement>
                            <Input type='email' placeholder='Email' {...register("mail", { required: "Email Address is required" })}
                                aria-invalid={errors.mail ? "true" : "false"} />
                        </InputGroup>
                        {errors.mail && <p role="alert">{errors.mail.message}</p>}
                    </div>
                    <div>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <LockIcon color='gray-300' />
                            </InputLeftElement>
                            <Input type={show ? 'text' : 'password'} placeholder='Password' {...register("password", { required: true })}
                                aria-invalid={errors.password ? "true" : "false"} />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick} bg='transparent'>
                                    {show ? <ViewOffIcon /> : <ViewIcon />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        {errors.password?.type === "required" && (
                            <p role="alert">El password is required</p>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">

                        <input className="bg-bunker-400 p-2 rounded-md" type="submit" value={"Sign In"} />

                        <input className="bg-bunker-400 p-2 rounded-md" type="submit" value={"Sign In wint Google"} />
                    </div>
                </form>
            </div>

            <div>
                <p>Don't have an account? <span className="text-sky-500">Sign up</span> </p>
            </div>
        </div>

    )
}

export default Login
