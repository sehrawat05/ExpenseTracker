import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ShowExpenses = () => {
    const navigate = useNavigate();
    // const { serverUrl } = useContext(authDataContext);
    const user = JSON.parse(
        localStorage.getItem("user")
    );
    const [userData, setUserData] = useState(user);
    const userId = userData?._id;
    return (
        <>
            {userId && (
                <div className="flex items-center justify-center mt-4">
                    <button
                        className="px-20 py-3 rounded-2xl 
                    bg-gradient-to-r from-purple-700 via-violet-600 to-fuchsia-600
                    text-white font-semibold text-lg
                    hover:scale-105 transition-all duration-300
                    shadow-xl"
                        onClick={() => {
                            navigate("/expenses");
                        }}>
                        Show My Expenses
                    </button>
                </div>
            )}
        </>
    )
}

export default ShowExpenses