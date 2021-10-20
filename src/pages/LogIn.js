//React
import React from 'react'

//Utils
import { Grid, Input, InputAdornment, InputLabel, TextField, Typography } from "@material-ui/core"
import { AccountCircle, Lock } from "@material-ui/icons"

//Styles
import "../assets/styles/Login.scss";

const Login = () => {
    return (
        <div className="container">
            <div className="circle_1" />
            <div className="circle_2" />
            <div className="circle_3" />
            <div className="circle_4" />
            <div className="card_login">
                <Grid container>
                    <Grid item xs={7}>
                        <div className="login_brand">
                            <img src={ require( "../assets/img/3967148.png" ).default } alt="logo" />
                            <Typography variant="h2">Tu Tienda Online</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={5}>
                        <div className="form_container">
                            <Typography variant="h5"> Bienvenido!! </Typography>
                            <div className="imput_container">
                                <InputLabel className="label"> Ingresar Email </InputLabel>
                                <Input
                                    className="imput"
                                    placeholder="Email"
                                    type="email"
                                    required
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <AccountCircle/>
                                        </InputAdornment>
                                    }
                                />
                            </div>
                            <div className="imput_container">
                                <InputLabel className="label"> Ingresar Contraseña </InputLabel>
                                <Input
                                    className="imput"
                                    placeholder="Contraseña"
                                    type="password"
                                    required
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <Lock/>
                                        </InputAdornment>
                                    }
                                />
                            </div>
                            <Typography variant="body1" align="right"> ¿Te olvidaste la contraseña? </Typography>
                            <button> Ingresar </button>
                            <div className="social_icons">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="35" height="35" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="35" height="35" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <rect x="4" y="4" width="16" height="16" rx="4" />
                                    <circle cx="12" cy="12" r="3" />
                                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="35" height="35" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="35" height="35" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <rect x="4" y="4" width="16" height="16" rx="2" />
                                    <line x1="8" y1="11" x2="8" y2="16" />
                                    <line x1="8" y1="8" x2="8" y2="8.01" />
                                    <line x1="12" y1="16" x2="12" y2="11" />
                                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-youtube" width="35" height="35" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <rect x="3" y="5" width="18" height="14" rx="4" />
                                    <path d="M10 9l5 3l-5 3z" />
                                </svg>
                            </div> 
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Login
