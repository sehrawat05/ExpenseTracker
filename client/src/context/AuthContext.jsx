import { createContext } from 'react';
export const authDataContext = createContext();
const AuthContext = ({ children }) => {
    let serverUrl = "https://expensetracker-c7e1.onrender.com";

    let value = { serverUrl }
    return (
        <authDataContext.Provider value={value}>
            {children}
        </authDataContext.Provider>
    )
}

export default AuthContext
