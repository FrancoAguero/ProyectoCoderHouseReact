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


const LogInForm = ({ setSelectForm }) => {
    const [ formData, setFormData ] = useState( { email: "", password: "" } )
    const [ error, setError ] = useState( '' )
    const [ loading, setLoading ] = useState( false )
    const { logIn } = useAuth()
    const history = useHistory()


    const handleSetForm = () => {
        setSelectForm(( prevState ) => !prevState)
    }

    const handleChange = (e) => {
        setFormData((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value
            })
        )
    }
    
    const handleSubmit = async ( e ) => {
        e.preventDefault()

        try {
            setError( '' )
            setLoading( true )
            await logIn( formData.email, formData.password )
            history.push("/")

        } catch ( err ) {
            if(err == "FirebaseError: Firebase: The password is invalid or the user does not have a password. (auth/wrong-password)." 
            || "FirebaseError: Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found)." ) {
                setError( "email o contraseña incorrecta, intenta de nuevo!!" )
            }
            console.log(`%%%%% ${ err }`)
        }
        
        setLoading( false )
    }
    
    return (
        <div>
            <form className="form_container" onSubmit={handleSubmit}>
                    <Button className="form_button" variant="outlined" onClick={ handleSetForm } disabled={ loading }> Registrarse </Button>
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
                    <Typography variant="body1" align="right"> ¿Te olvidaste la contraseña? </Typography>
                    <Button className="confirm_button" type="submit" variant="contained" disabled={ loading }> Ingresar </Button>
                    <SocialIcons />
            </form>
        </div>
    )
}

export default LogInForm
