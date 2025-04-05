import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext();

function AuthProvider({children}) {
 const initialAutuser = localStorage.getItem("user");
 const [authUser , setAuthuser] = useState(
    initialAutuser ? JSON.parse(initialAutuser) : undefined
 )
 return(
    <AuthContext.Provider value={[authUser , setAuthuser]}>
        {children}
    </AuthContext.Provider>
 )
}

export const useAuth = ()=>useContext(AuthContext);
export default AuthProvider
