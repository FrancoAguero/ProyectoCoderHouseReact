import React, { useContext, useEffect, useState } from 'react'

import { auth } from "../firebase"

const AuthContext = React.createContext( [] ) 

export const AuthProvider = ({ children }) => {
    const [ currentUser, setCurrentUser ] = useState()
    const [ loading, setLoading ] = useState( true )

    const signUp = ( email, password ) => {
        return auth.createUserWithEmailAndPassword( email, password )
    }

    const logIn = ( email, password ) => {
        return auth.signInWithEmailAndPassword( email, password )
    }

    const  logOut = () => {
        return auth.signOut()
    }
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(( user ) => {
            setCurrentUser( user )
            setLoading( false )
        })

        return unsubscribe
    }, [])


    const value = { currentUser, signUp, logIn, logOut }
    
    return (
        <AuthContext.Provider value={ value }>
            { !loading && children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext( AuthContext )

    if( !context ) {
        throw new Error( "%%%%% useAuth debe userse desde dentro de un AuthProvider" )
    };

    return context;
}
