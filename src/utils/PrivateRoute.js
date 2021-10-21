//React
import React from 'react'

//React-Router-Dom
import { Redirect, Route }  from "react-router-dom"

//AuthContext
import { useAuth } from "context/AuthContext"

const PrivateRouter = ({ component: Component, ...res }) => {
    const { currentUser } = useAuth()
    console.log( currentUser )
    
    return (
        <Route 
            {...res}
            component={( props ) => {
                return currentUser ? <Component {...props} /> :
                <Redirect to="/logIn"/>
            }}
        >
        </Route>
    )
}

export default PrivateRouter
