//React
import React, { useState } from 'react'

//Material UI
import { Button, Input, InputAdornment, InputLabel, Typography } from "@material-ui/core"
import { Alert } from "@material-ui/lab"
import { AccountCircle, Lock } from "@material-ui/icons"

//AuthContext
import { useAuth } from 'context/AuthContext'

//Components
import SocialIcons from "components/SocialIcons"

//React router
import { useHistory } from 'react-router-dom'


const SignUpForm = ({ setSelectForm }) => {
    const [ formData, setFormData ] = useState( { email: "", password: "", passwordConfirm: "" } )
    const [ error, setError ] = useState( '' )
    const [ loading, setLoading ] = useState( false )
    const { signUp } = useAuth()
    const history = useHistory()

    const handleSetForm = () => {
        setSelectForm(( prevState ) => !prevState)
    }

    const handleChange = (e) => {
        setFormData(( prevState ) => ({
                ...prevState,
                [e.target.name]: e.target.value
            })
        )
    }
    
    const handleSubmit = async ( e ) => {
        e.preventDefault()

        if( formData.password !== formData.passwordConfirm ) {
            return setError( "Las contraseñas no son iguales" )
        }

        try {
            setError( '' )
            setLoading( true )
            await signUp( formData.email, formData.password )
            history.push("/")

        } catch ( err ) {
            if(err == "FirebaseError: Firebase: The email address is already in use by another account. (auth/email-already-in-use).") {
                setError("El email ingresado ya esta en uso")
            } else 
            if (err == "FirebaseError: Firebase: Password should be at least 6 characters (auth/weak-password).") {
                setError("La contraseña debe de tener mas de 6 caracteres")
            }
            console.log(`%%%%% ${ err }`)
        }
        setLoading( false )
    }
    
    return (
        <div>
            <form className="form_container" onSubmit={ handleSubmit }>
                    <Button className="form_button" variant="outlined" onClick={ handleSetForm } disabled={ loading }> Ingresar </Button>
                    <Typography variant="h5"> Bienvenido!! </Typography>
                    {error && <Alert variant="filled" severity="error">{ error }</Alert>}
                    <div className="imput_container">
                        <InputLabel className="label"> Ingresar Email </InputLabel>
                        <Input
                            name="email"
                            className="imput"
                            placeholder="Email"
                            type="email"
                            required
                            onChange={ handleChange }
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle/>
                                </InputAdornment>
                            }
                        />
                    </div>
                    <div className="imput_container">
                        <InputLabel className="label"> Contraseña </InputLabel>
                        <Input
                            name="password"
                            className="imput"
                            placeholder="Contraseña"
                            type="password"
                            required
                            onChange={ handleChange }
                            startAdornment={
                                <InputAdornment position="start">
                                    <Lock/>
                                </InputAdornment>
                            }
                        />
                    </div>
                    <div className="imput_container">
                        <InputLabel className="label"> Confirmar Contraseña </InputLabel>
                        <Input
                            name="passwordConfirm"
                            className="imput"
                            placeholder="Confirmar Contraseña"
                            type="password"
                            required
                            onChange={ handleChange }
                            startAdornment={
                                <InputAdornment position="start">
                                    <Lock/>
                                </InputAdornment>
                            }
                        />
                    </div>
                    <Button className="confirm_button" type="submit" variant="contained" disabled={ loading }> Ingresar </Button>
                    <SocialIcons />
            </form>
        </div>
    )
}

export default SignUpForm
