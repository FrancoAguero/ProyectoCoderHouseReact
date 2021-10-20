import React, { useContext, useEffect, useState } from 'react'

import { auth } from "../firebase"

const AuthContext = React.createContext( [] ) 

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState()

    const signUp = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(( user ) => {
            setCurrentUser( user )
        })

        return unsubscribe
    }, [])


    const value = { currentUser, signUp }
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext( AuthContext )

    if(!context) {
        throw new Error( "%%%%% useAuth debe userse desde dentro de un AuthProvider" )
    };

    return context;
}