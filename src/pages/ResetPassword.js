import { React, useState } from "react";

import { Images } from "../assets/images";

const ResetPassword = () => {
    const [userEmail, setuserEmail] = useState(null)
    const [isEmailInvalid, setisEmailInvalid] = useState('')

    const { Logo } = Images
    console.log(userEmail?.length)

    function ValidateEmail(inputText) {

        var mailformat = '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/';


        if (inputText.match(mailformat)) {
            // console.log("Valid email address!");
            setisEmailInvalid("")
            return true;
        }
        else {
            // console.log("You have entered an invalid email address!");
            setisEmailInvalid("invalid")
            return false;
        }
    }

    const resetPass = () => {
        if (userEmail?.length <= 1 || userEmail?.length === undefined) { setuserEmail(""); setisEmailInvalid("invalid") }
    }
    return (
        <section className="bg-gray-50 dark:bg-gray-900">

            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div>
                    {/* <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <img src={Logo} alt="Workflow" className="mx-auto h-12 w-auto" />
                        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                            Redefinir a senha
                        </h2>
                        <p class="mt-2 text-center text-base leading-5 text-gray-600">
                            Você receberá um e-mail com instruções para redefinir a senha
                        </p>
                    </div> */}
                    <div class="sm:mx-auto sm:w-full sm:max-w-md">
                        <img src={Logo} alt="Workflow" class="mx-auto h-12 w-auto" />
                        <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                            Redefinir a senha
                        </h2> <p class="mt-2 pr-1 text-center text-base leading-5 text-gray-600">
                            Você receberá um e-mail com instruções para redefinir a senha
                        </p>
                    </div>
                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        <form className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-5 mb-1 text-gray-700">
                                    E-mail
                                </label>
                                <div>
                                    <input onBlur={() => { if (userEmail?.length <= 1 || userEmail?.length === undefined) { setuserEmail(""); setisEmailInvalid("invalid") } }} type="text" onChange={(e) => {
                                        ValidateEmail(e.target.value)
                                        setuserEmail(e.target.value)
                                    }} autoComplete="username" value={userEmail ? userEmail : ""} name="email" className={`${userEmail?.length < 1 && 'border-red-500'} form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5  w-full`} />
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
                                <span className="block w-full rounded-md shadow-sm">
                                    <button onClick={() => resetPass()} type="button" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                        Redefinir senha
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ResetPassword