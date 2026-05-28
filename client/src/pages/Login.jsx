import React from 'react'
import { useForm } from 'react-hook-form'
import { IoMdArrowBack } from "react-icons/io";
import axios from 'axios';
import { authDataContext } from '../context/AuthContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const { serverUrl } = useContext(authDataContext);

    const onSubmit = async (data) => {
        console.log(data);

        // later connect backend here
        try {
            const res = await axios.post(
                `${serverUrl}/api/auth/login`,
                data, {
                withCredentials: true
            }
            );
            console.log("SUCCESS RESPONSE:", res.data);
            const user = res.data.user;
            console.log(user);
            localStorage.setItem(
                "user",
                JSON.stringify(user)
            );
            // localStorage.setItem("user", user);
            alert("Login successful!");
            navigate("/");
            reset();
        } catch (error) {
            console.log("ERROR FULL:", error);
            console.log("ERROR RESPONSE:", error.response?.data);
        }
        reset();
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#faf7ff] px-6">

            <div className="w-full max-w-md relative">

                {/* Back Button */}
                <button
                    className="absolute -left-15 top-4 text-2xl text-purple-700 hover:text-purple-900 transition"
                    onClick={() => window.history.back()}
                >
                    <IoMdArrowBack />
                </button>

                {/* Form Card */}
                <div className="bg-white rounded-3xl shadow-xl border border-purple-100 p-10">

                    {/* Heading */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-700 to-fuchsia-600 bg-clip-text text-transparent">
                            Login to your Account
                        </h1>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">


                        {/* Email */}
                        <div>
                            <label className="block mb-2 text-gray-700 font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                {...register("email")}
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block mb-2 text-gray-700 font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Enter password"
                                className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                {...register("password",)}
                            />
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-700 to-fuchsia-600 text-white font-semibold hover:scale-[1.02] transition-all duration-300 shadow-lg"
                        >
                            Login
                        </button>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login