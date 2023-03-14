import { React, useState } from "react";

import { Images } from "../assets/images";
import '../App.css'

const SignUp = () => {
    // const validation = process.env.REACT_APP_EMAIL_VALIDATION;

    const [userEmail, setuserEmail] = useState(null)
    const [isEmailInvalid, setisEmailInvalid] = useState('')
    const [isreEmailInvalid, setreisEmailInvalid] = useState('')
    const [isEmailSame, setisEmailSame] = useState(false)
    const [reEmail, setreEmail] = useState(null)
    const [userPass, setUserPass] = useState(null)
    const [isChecked, setIsCheck] = useState()

    const { Logo } = Images
    function ValidateEmail(inputText) {
        const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (inputText.type === 'email')
            if (inputText.value.match(validation)) {
                // console.log("Valid email address!");
                if (inputText.value === reEmail && isreEmailInvalid === "") setisEmailSame(false)
                setisEmailInvalid("")
                return true;
            }
            else {
                // console.log("You have entered an invalid email address!");
                setisEmailInvalid("invalid")
                return false;
            }
        if (inputText.type === "ReEmail")
            if (inputText.value.match(validation)) {
                // console.log("Valid email address!");
                if (inputText.value === userEmail && isEmailInvalid === "") setisEmailSame(false)
                setreisEmailInvalid("")
                return true;
            }
            else {
                // console.log("You have entered an invalid email address!");
                setreisEmailInvalid("invalid")
                return false;
            }
    }

    const signUpNow = () => {
        if (userEmail?.length <= 1 || userEmail?.length === undefined) { setuserEmail(""); setisEmailInvalid("invalid") }
        if (reEmail?.length <= 1 || reEmail?.length === undefined) { setreEmail(""); setreisEmailInvalid("invalid") }
        if (userPass?.length <= 1 || userPass?.length === undefined) setUserPass("")
        if (isChecked !== true) setIsCheck(false)
        if (userEmail !== reEmail) setisEmailSame(true)
        console.log(isEmailSame)
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">

            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div>
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <img src={Logo} alt="Workflow" className="mx-auto h-12 w-auto" />
                        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                            Criar nova conta
                        </h2>
                        <p className="mt-2 text-center text-base leading-5 text-gray-600">
                            <span className="mr-0.5"> Ou </span>
                            <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                                entrar na sua conta existente
                            </a>
                        </p>
                    </div>
                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        <form className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-5 mb-1 text-gray-700">
                                    E-mail
                                </label>
                                <div>
                                    <input onBlur={() => {
                                        if (userEmail?.length <= 1 || userEmail?.length === undefined) { setuserEmail(""); setisEmailInvalid("invalid") }
                                    }}
                                        type="text"
                                        onChange={(e) => {
                                            ValidateEmail({ value: e.target.value, type: 'email' })
                                            setuserEmail(e.target.value)
                                        }

                                        } autoComplete="email" value={userEmail ? userEmail : ""} name="email" className={`${userEmail?.length < 1 && 'border-red-500'}  block py-2 px-3 border border-gray-300 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] focus:shadow-outline-green rounded-md  sm:text-sm sm:leading-5  w-full`} />
                                    <div className="text-red-500 text-xs mt-1">

                                        <div />
                                    </div>
                                </div>
                                {isEmailInvalid === "invalid" &&
                                    <>
                                        {userEmail?.length < 1 ?
                                            < div >
                                                <div className="text-xs text-red-500">Esse campo é obrigatório</div>
                                            </div>
                                            :
                                            < div >
                                                <div className="text-xs text-red-500">O e-mail deve ser válido</div>
                                            </div>
                                        }
                                    </>
                                }
                            </div>
                            <div className="mt-6">
                                <label htmlFor="email" className="block text-sm font-medium leading-5 mb-1 text-gray-700">
                                    Repetir e-mail
                                </label>
                                <div>
                                    <input onBlur={() => { if (reEmail?.length <= 1 || reEmail?.length === undefined) { setuserEmail(""); setreisEmailInvalid("invalid") } }} type="text"
                                        onChange={(e) => {
                                            ValidateEmail({ value: e.target.value, type: 'ReEmail' })
                                            setreEmail(e.target.value)
                                        }} autoComplete="email" value={reEmail ? reEmail : ""} name="email" className={`${reEmail?.length < 1 && 'border-red-500'} form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5  w-full`} />
                                    <div className="text-red-500 text-xs mt-1">
                                        <div />
                                    </div>
                                </div>
                                {/* {reEmail?.length < 1 &&
                                    <div>
                                        <div className="text-xs text-red-500">Os dois e-mails devem ser iguais.</div>
                                        <div className="text-xs text-red-500">Esse campo é obrigatório</div>
                                    </div>
                                } */}
                                {isreEmailInvalid === "invalid" &&
                                    <>
                                        {reEmail?.length < 1 ?
                                            <div>
                                                <div className="text-xs text-red-500">Os dois e-mails devem ser iguais.</div>
                                                <div className="text-xs text-red-500">Esse campo é obrigatório</div>
                                            </div>
                                            :
                                            < div >
                                                <div className="text-xs text-red-500">O e-mail deve ser válido</div>
                                            </div>
                                        }
                                    </>
                                }
                                {isEmailSame &&
                                    <div className="text-red-500 border-b-0">
                                        Email are not same
                                    </div>
                                }
                            </div>
                            <div className="mt-6">
                                <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">
                                    Senha
                                </label>
                                <div>
                                    <input type="password" autoComplete="current-password" onBlur={() => { if (userPass?.length <= 1 || userPass?.length === undefined) setUserPass("") }} onChange={(e) => {
                                        setUserPass(e.target.value)
                                    }}
                                        value={userPass ? userPass : ''} name="password" className={` ${userPass?.length < 1 && 'border-red-500'} form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5  w-full`} />
                                    <div className="text-red-500 text-xs mt-1">
                                        {userPass?.length < 1 &&
                                            <div>
                                                Esse campo é obrigatório
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6">
                                <label className="relative flex items-start mt-2">
                                    <div className="flex items-center h-5">
                                        <input type="checkbox" onClick={() => setIsCheck(!isChecked)} checked={isChecked} className={` ${isChecked === false && 'border-red-500'} form-checkbox h-4 w-4 rounded text-indigo-600 transition duration-150 ease-in-out cursor-pointer border-gray-300`} />
                                    </div>
                                    <div className="ml-2 text-sm leading-5">
                                        <span className="font-medium text-gray-700">
                                            Eu li e aceito os
                                            <a href="https://kiwify.com.br/termos-de-uso" target="_blank" rel="noreferrer" className="underline">
                                                termos de uso</a>,
                                            <a href="https://kiwify.com.br/licenca-de-uso-software" target="_blank" rel="noreferrer" className="underline">
                                                termos de licença de uso de software</a>,
                                            <a href="https://kiwify.com.br/politica-de-conteudo" target="_blank" rel="noreferrer" className="underline">
                                                política de conteúdo
                                            </a>
                                            da Kiwify
                                        </span>
                                        ${isChecked === false &&
                                            <div className="text-red-500 border-b-0">
                                                (Esse campo é obrigatório)
                                            </div>
                                        }
                                    </div>
                                </label>
                            </div>
                            <div className="mt-6">
                                <span className="block w-full rounded-md shadow-sm">
                                    <button onClick={() => signUpNow()} type="button" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500  focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"> Criar conta
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div >
            </div >
        </section >
    )
}

export default SignUp
