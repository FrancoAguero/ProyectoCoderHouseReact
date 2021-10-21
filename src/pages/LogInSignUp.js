//React
import React, { useEffect, useState } from 'react'

//Material UI
import { Grid, Typography } from "@material-ui/core"

//Styles
import "../assets/styles/Login.scss";

//Components
import SignUpFrom from "components/SignUpFrom";
import LogInForm from 'components/LogInFrom';

//AuthContext
import { useAuth } from 'context/AuthContext';

//React-Router
import { useHistory } from 'react-router-dom';

const LogInSignUp = () => {
    const [ selectForm, setSelectForm ] = useState( true )
    const { currentUser } = useAuth()
    const history = useHistory()


    useEffect(() => {
        currentUser && history.push('/')
    }, [currentUser])

    return (
        <div className="container">
            <div className="circle_1" />
            <div className="circle_2" />
            <div className="circle_3" />
            <div className="circle_4" />
            <div className="card_login">
                <Grid container>
                    <Grid item xs={ 7 }>
                        <div className="login_brand">
                            <img src={ require( "../assets/img/3967148.png" ).default } alt="logo" />
                            <Typography variant="h2">Tu Tienda Online</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={ 5 }>
                        {selectForm ? <LogInForm setSelectForm={ setSelectForm }/> : <SignUpFrom setSelectForm={ setSelectForm } />}
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default LogInSignUp
