import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { authDataContext } from '../context/AuthContext'
import { useNavigate, useLocation } from 'react-router-dom'
import { IoMdArrowBack } from 'react-icons/io'
const ExpenseEdit = () => {

    const { serverUrl } = useContext(authDataContext)
    const navigate = useNavigate()
    const location = useLocation()

    const expense = location.state

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()

    // ✅ fill old data
    useEffect(() => {
        if (!expense) {
            navigate("/expenses")
            return
        }

        reset({
            description: expense.description,
            amount: expense.amount,
            category: expense.category,
            date: expense.date || new Date().toISOString().split("T")[0],
        })
    }, [expense, reset, navigate])

    // ✅ update API
    const onSubmit = async (data) => {
        try {
            const res = await axios.put(
                `${serverUrl}/api/expense/update/${expense._id}`,
                data,
                { withCredentials: true }
            )

            console.log(res)
            alert("Expense updated successfully!")

            navigate("/expenses")

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-fuchsia-50 relative px-4">

            {/* Back Button OUTSIDE form */}
            <button
                className="absolute top-6 left-6 text-3xl text-purple-700 hover:text-purple-900 transition"
                onClick={() => navigate(-1)}
            >
                <IoMdArrowBack />
            </button>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 space-y-5"
            >

                <h2 className="text-2xl font-bold text-center text-purple-700">
                    Edit Expense
                </h2>

                {/* Description */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700">
                        Description
                    </label>

                    <input
                        type="text"
                        placeholder="Enter expense description"
                        {...register("description", {
                            required: "Description is required",
                            minLength: {
                                value: 3,
                                message: "Minimum 3 characters required",
                            },
                        })}
                        className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-500"
                    />

                    {errors.description && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.description.message}
                        </p>
                    )}
                </div>

                {/* Amount */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700">
                        Amount
                    </label>

                    <input
                        type="number"
                        placeholder="Enter amount"
                        {...register("amount", {
                            required: "Amount is required",
                            min: {
                                value: 1,
                                message: "Amount must be greater than 0",
                            },
                        })}
                        className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-500"
                    />

                    {errors.amount && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.amount.message}
                        </p>
                    )}
                </div>

                {/* Category */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700">
                        Category
                    </label>

                    <select
                        {...register("category", {
                            required: "Category is required",
                        })}
                        className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                    >
                        <option value="">Select Category</option>
                        <option value="Food">Food</option>
                        <option value="Travel">Travel</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Bills">Bills</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Health">Health</option>
                        <option value="Education">Education</option>
                        <option value="Salary">Salary</option>
                        <option value="Investment">Investment</option>
                        <option value="Other">Other</option>
                    </select>

                    {errors.category && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.category.message}
                        </p>
                    )}
                </div>

                {/* Date */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700">
                        Date
                    </label>

                    <input
                        type="date"
                        {...register("date")}
                        className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition duration-300"
                >
                    Update Expense
                </button>

            </form>
        </div>
    )
}

export default ExpenseEdit