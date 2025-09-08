import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { setUser } from '../../../features/CartOperations/userSlice.js';
import { useEffect } from 'react';


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.userOperations); // no need right?

    useEffect(() => {
        if (userState) {
            console.log("User is ready:", userState);
        }
    }, [userState]);

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const res = await axios.post(
                `${import.meta.env.VITE_API_URL}/users/login`,
                { email, password },
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            dispatch(setUser(res.data.user))
            console.log("After dispatch");
            // toast welcome
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                navigate("/")
                // setTimeout(() => {
                //     navigate("/");
                // }, 3000);
            }

            console.log(userState);

        } catch (error) {
            if (error.response) {
                console.log("Error status while logging in::", error.response.status);
                console.log("Error message while logging in::", error.response.data.message);
            } else {
                console.log("No response from server");
            }
        }
    }

    return (
        <div className="flex flex-col font-poppins items-center justify-center dark:bg-gray-900 min-w-screen min-h-screen">
            <img
                className='w-[7%] cursor-pointer'
                onClick={() => navigate("/")}
                src="LogoForUrbanBasket.png" alt="UrbanBasket" />
            <h1 className='text-5xl'>
                Welcome!
            </h1>
            <div className="grid gap-8">
                <div
                    id="back-div"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4 "
                >
                    <div
                        className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2"
                    >
                        <h1 className="pt-8 pb-6 font-bold text-5xl dark:text-gray-400 text-center cursor-default">
                            Login
                        </h1>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <label for="email" className="mb-2 dark:text-gray-400 text-lg">Email</label>
                                <input
                                    id="email"
                                    className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                                    type="email"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div>
                                <label for="password" className="mb-2 dark:text-gray-400 text-lg">Password</label>
                                <input
                                    id="password"
                                    className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                                    type="password"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                            <button
                                className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                                type="submit"

                            >
                                LOGIN
                            </button>
                        </form>
                        <div className="flex flex-col mt-4 items-center justify-center text-sm">
                            <h3>
                                <span className="cursor-default dark:text-gray-300">Don't have an account?</span>
                                <span
                                    className="group text-blue-400 transition-all duration-100 ease-in-out"
                                >
                                    <Link to={"/SignUp"}
                                        className="bg-left-bottom ml-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                                    >
                                        Sign Up
                                    </Link>
                                </span>
                            </h3>
                        </div>

                        <div
                            id="third-party-auth"
                            className="flex items-center justify-center mt-5 flex-wrap"
                        >
                            <button
                                href="#"
                                className="flex space-x-7 hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                            >
                                <img
                                    className="max-w-[25px]"
                                    src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                                    alt="Google"
                                />
                                <p>Login using Google Account</p>
                            </button>
                            {/* <button
                                href="#"
                                className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                            >
                                <img
                                    className="max-w-[25px]"
                                    src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/"
                                    alt="Linkedin"
                                />
                            </button>
                            <button
                                href="#"
                                className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                            >
                                <img
                                    className="max-w-[25px] filter dark:invert"
                                    src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
                                    alt="Github"
                                />
                            </button>
                            <button
                                href="#"
                                className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                            >
                                <img
                                    className="max-w-[25px]"
                                    src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
                                    alt="Facebook"
                                />
                            </button>
                            <button
                                href="#"
                                className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                            >
                                <img
                                    className="max-w-[25px] dark:gray-100"
                                    src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
                                    alt="twitter"
                                />
                            </button>

                            <button
                                href="#"
                                className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                            >
                                <img
                                    className="max-w-[25px]"
                                    src="https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/"
                                    alt="apple"
                                />
                            </button>  */}
                        </div>
                        <div
                            className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm"
                        >
                            <p className="cursor-default">
                                By signing in, you agree to our
                                <a
                                    className="group text-blue-400 transition-all duration-100 ease-in-out"
                                    href="#"
                                >
                                    <span
                                        className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                                    >
                                        Terms
                                    </span>
                                </a>
                                and
                                <a
                                    className="group text-blue-400 transition-all duration-100 ease-in-out"
                                    href="#"
                                >
                                    <span
                                        className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                                    >
                                        Privacy Policy
                                    </span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
