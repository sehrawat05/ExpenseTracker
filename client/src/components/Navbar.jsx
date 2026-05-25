import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate()
    return (
        <nav className="w-full bg-gradient-to-r from-purple-700 via-violet-600 to-fuchsia-600 shadow-lg">
            <div className="w-full px-7 mx-auto py-4 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-purple-700 font-bold text-xl shadow-md">
                        T
                    </div>
                </div>

                {/* App Name */}
                <h1 className="text-white text-2xl font-bold tracking-wide">
                    Toko - Your Expense Tracker App
                </h1>

                {/* Buttons */}
                <div className="flex items-center gap-4">
                    <button className="px-5 py-2 rounded-xl border border-white text-white font-medium hover:bg-white hover:text-purple-700 transition-all duration-300" onClick={() => navigate(
                        "/login"
                    )}>
                        Login
                    </button>

                    <button className="px-5 py-2 rounded-xl bg-white text-purple-700 font-semibold hover:scale-105 transition-all duration-300 shadow-md" onClick={() => navigate("/signup")}>
                        Sign Up
                    </button>
                </div>

            </div>
        </nav>
    )
}

export default Navbar