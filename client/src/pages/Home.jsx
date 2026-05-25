import React from 'react'
import Navbar from '../components/Navbar'
const Home = () => {
    return (
        <div>
            <Navbar />
            <section className="w-full min-h-screen bg-[#faf7ff] py-20 px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-700 to-fuchsia-600 bg-clip-text text-transparent mb-4">
                        Powerful Features
                    </h1>

                    <p className="text-gray-600 text-lg">
                        Everything you need to manage your expenses smarter.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <div className="bg-white rounded-3xl p-8 border border-purple-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-500 flex items-center justify-center text-white text-2xl mb-6">
                            ➕
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 mb-3">
                            Add Expenses
                        </h2>

                        <p className="text-gray-600 leading-relaxed">
                            Quickly add and manage your daily expenses with a smooth and simple experience.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-3xl p-8 border border-purple-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-500 flex items-center justify-center text-white text-2xl mb-6">
                            🗑️
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 mb-3">
                            Delete Expenses
                        </h2>

                        <p className="text-gray-600 leading-relaxed">
                            Remove unnecessary expense records anytime and keep your tracker clean.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-3xl p-8 border border-purple-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-500 flex items-center justify-center text-white text-2xl mb-6">
                            📂
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 mb-3">
                            Categorize Expenses
                        </h2>

                        <p className="text-gray-600 leading-relaxed">
                            Organize spending into categories like Food, Shopping, Bills and Travel.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white rounded-3xl p-8 border border-purple-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-500 flex items-center justify-center text-white text-2xl mb-6">
                            ✏️
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 mb-3">
                            Update Records
                        </h2>

                        <p className="text-gray-600 leading-relaxed">
                            Edit your expenses anytime whenever you need to make changes or corrections.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-white rounded-3xl p-8 border border-purple-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-500 flex items-center justify-center text-white text-2xl mb-6">
                            📊
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 mb-3">
                            Expense Analytics
                        </h2>

                        <p className="text-gray-600 leading-relaxed">
                            Track your spending trends and understand your financial habits visually.
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-white rounded-3xl p-8 border border-purple-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-500 flex items-center justify-center text-white text-2xl mb-6">
                            🔒
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 mb-3">
                            Secure Authentication
                        </h2>

                        <p className="text-gray-600 leading-relaxed">
                            Keep your data safe with secure login, signup and protected authentication.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Home