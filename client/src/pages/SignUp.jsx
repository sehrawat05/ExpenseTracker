import React from 'react'
import { useForm } from 'react-hook-form'
import { IoMdArrowBack } from "react-icons/io";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { authDataContext } from '../context/AuthContext'
import { useContext } from 'react'
import { userDataContext } from '../context/UserContext'
const SignUp = () => {
    const navigate = useNavigate();
    const { serverUrl } = useContext(authDataContext);
    const { setUser } = useContext(userDataContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        try {
            console.log("Sending data:", data);

            const res = await axios.post(
                `${serverUrl}/api/auth/signup`,
                data, {
                withCredentials: true
            }
            );

            console.log("SUCCESS RESPONSE:", res.data);

            localStorage.setItem(
                "user",
                JSON.stringify(user)
            );
            setUser(user);
            alert("Signup successful!");
            navigate("/");
            reset();

        } catch (error) {
            console.log("ERROR FULL:", error);
            console.log("ERROR RESPONSE:", error.response?.data);
            alert(error.response?.data?.message || "Signup failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#faf7ff] px-6">
            <div className="w-full max-w-md relative">

                {/* Back Button */}
                <button
                    className="absolute left-0 top-4 text-2xl text-purple-700 hover:text-purple-900 transition"
                    onClick={() => window.history.back()}
                >
                    <IoMdArrowBack />
                </button>

                {/* Form Card */}
                <div className="bg-white rounded-3xl shadow-xl border border-purple-100 p-10">

                    {/* Heading */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-700 to-fuchsia-600 bg-clip-text text-transparent">
                            Create Account
                        </h1>
                        <p className="text-gray-500 mt-3">
                            Start managing your expenses smarter
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                        {/* Username */}
                        <div>
                            <label className="block mb-2 text-gray-700 font-medium">
                                Username
                            </label>
                            <input
                                type="text"
                                placeholder="Enter username"
                                className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                {...register("name", {
                                    required: "Username is required",
                                    minLength: { value: 3, message: "Minimum 3 characters required" },
                                })}
                            />
                            {/* Display Username Error */}
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block mb-2 text-gray-700 font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                {...register("email", {
                                    required: "Email is required",
                                })}
                            />
                            {/* Display Email Error */}
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
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
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 3, message: "Minimum 3 characters required" },
                                })}
                            />
                            {/* Display Password Error */}
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-700 to-fuchsia-600 text-white font-semibold hover:scale-[1.02] transition-all duration-300 shadow-lg"
                        >
                            Sign Up
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp