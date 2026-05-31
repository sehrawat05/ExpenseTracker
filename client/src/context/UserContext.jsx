import { createContext, useState } from 'react';

export const userDataContext = createContext();

const UserContext = ({ children }) => {

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const value = {
        user,
        setUser
    };

    return (
        <userDataContext.Provider value={value}>
            {children}
        </userDataContext.Provider>
    );
};

export default UserContext;