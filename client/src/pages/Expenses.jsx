import React, { useState } from 'react'
import { useEffect } from 'react';
import { authDataContext } from '../context/AuthContext';
import { useContext } from 'react';
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Expenses = () => {
    const [expenses, setExpenses] = useState([]);
    const { serverUrl } = useContext(authDataContext);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const res = await axios.get(`${serverUrl}/api/expense/all`, {
                    withCredentials: true
                });
                console.log(res.data.expenses);
                setExpenses(res.data.expenses);
            } catch (error) {
                console.log(error);
            }
        }
        fetchExpenses();
    }, [])
    const onDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this expense?");
        if (!confirmDelete) return;
        try {
            const res = await axios.delete(`${serverUrl}/api/expense/delete/${id}`, {
                withCredentials: true
            })
            console.log(res.data);
            setExpenses(expenses.filter(expense => expense._id !== id))
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="min-h-screen bg-[#faf7ff] px-6 py-10">

            <h1 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-purple-700 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                My Expenses
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {expenses.map((expense) => (

                    <div
                        key={expense._id}
                        className="relative bg-white rounded-3xl p-6 shadow-xl border border-purple-100 hover:scale-[1.02] transition-all duration-300"
                    >

                        {/* Top Right Icons */}
                        <div className="absolute top-4 right-4 flex items-center gap-3">

                            <button
                                className="p-2 rounded-full bg-purple-100 text-purple-700 hover:bg-purple-700 hover:text-white transition-all duration-300"
                            >
                                <FaEdit size={18} />
                            </button>

                            <button
                                className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
                            >
                                <MdDelete size={20} onClick={() => {
                                    onDelete(expense._id)
                                }} />
                            </button>

                        </div>

                        {/* Title */}
                        <h2 className="text-2xl font-bold text-purple-700 mb-4">
                            {expense.title}
                        </h2>

                        {/* Amount */}
                        <div className="mb-3">
                            <p className="text-gray-500 text-sm">
                                Amount
                            </p>

                            <p className="text-3xl font-bold text-green-600">
                                ₹ {expense.amount}
                            </p>
                        </div>

                        {/* Category */}
                        <div className="mb-3">
                            <p className="text-gray-500 text-sm">
                                Category
                            </p>

                            <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-700 font-medium">
                                {expense.category}
                            </span>
                        </div>

                        {/* Date */}
                        <div className="mt-5">
                            <p className="text-gray-500 text-sm">
                                Date
                            </p>

                            <p className="text-gray-700 font-medium">
                                {new Date(expense.date).toLocaleDateString()}
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Expenses