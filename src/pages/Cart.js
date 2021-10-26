import React from 'react';

import firebase from "firebase/compat/app"

//Custom Components
import ItemCart from "../components/ItemCart/ItemCart";

//Material UI
import { Grid, Typography, Divider } from '@material-ui/core';
import Swal from "sweetalert2";

//Style
import "../assets/styles/Cart.scss";

//router
import { useHistory } from "react-router-dom"

//Context
import { useCart } from '../context/CartContext';
import { NavLink } from 'react-router-dom';
import { getFirestore } from '../firebase';
import { useAuth } from 'context/AuthContext';

const Cart = () => {
    const { cart,  getTotal, getIva, clear } = useCart();
    const { currentUser } = useAuth()
    const history = useHistory()

    const handleBuy = () => {
        if( currentUser ) {
            Swal.fire({
                title: "Confirmando Compra",
                text: "Espere unos segundos...",
                allowOutsideClick: false,
                showConfirmButton: false,
                willOpen: () => {
                    Swal.showLoading()
                },
            })
            const db = getFirestore()
            db.collection("orders").add({
                buyer: { phone: 123456, email: currentUser.email},
                items: cart,
                date: firebase.firestore.FieldValue.serverTimestamp(),
                total: getTotal()
            })
                .then(( docRef ) => {
                    Swal.fire({
                        icon: 'success',
                        title: `Tu compra ha sido realizada id de compra: ${ docRef.id }`,
                        showConfirmButton: false,
                        timer: 3000
                    })
                })
                .catch(( error ) => console.log( error ))
                .finally(() => clear())
        } else {
            Swal.fire({
                title: 'Para finalizar la compra debe logearse',
                text: "Desea logearse?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#4658C9',
                cancelButtonColor: '#f14646',
                confirmButtonText: 'Logearme',
                cancelButtonText: 'Cancelar Compra'
                }).then((result) => {
                    if (result.isConfirmed) {
                        history.push("/logIn")
                    }
                })
        }
    }
    
    return (
        <Grid container justifyContent="center" alignItems="center" className="cart_container">
            <Grid item xs={12}>
                <Typography variant="h3">Carrito</Typography>
            </Grid>
            <Grid item xs={8}>
                {cart.length === 0 ? (
                    <div className="cart_empty">
                        <Typography variant="h2">Carrito Vacio!!</Typography>
                    </div>
                    ) : 
                    cart.map((item) => (
                        <ItemCart data={item}/>
                    ))
                }
            </Grid>
            <Grid item container xs={4}>
                <Grid item xs={12} className="cart_total_detail">
                    <Typography variant="h4" className="cart_total_title">Total de la compra</Typography>
                    <Divider/>
                    <Grid className="cart_total_subdetail">
                        <Typography variant="inherit" className="cart_total_subtitle">Productos</Typography>
                        <Typography variant="inherit" className="cart_total_value">{`$ ${getTotal()}`}</Typography>
                    </Grid>
                    <Grid className="cart_total_subdetail">
                        <Typography variant="inherit" className="cart_total_subtitle">Envio</Typography>
                        <Typography variant="inherit" className="cart_total_value">{`Free`}</Typography>
                    </Grid>
                    <Grid className="cart_total_subdetail">
                        <Typography variant="inherit" className="cart_total_subtitle">Subtotal</Typography>
                        <Typography variant="inherit" className="cart_total_value">{`$ ${getTotal()}`}</Typography>
                    </Grid>
                    <Grid className="cart_total_subdetail">
                        <Typography variant="inherit" className="cart_total_subtitle">IVA 21%</Typography>
                        <Typography variant="inherit" className="cart_total_value">{`$ ${getIva()}`}</Typography>
                    </Grid>
                    <Grid className="cart_total_subdetail total">
                        <Typography variant="inherit" className="cart_total_subtitle">TOTAL</Typography>
                        <Typography variant="inherit" className="cart_total_value">{`$ ${getTotal() + getIva()}`}</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="button_container">
                    {cart.length === 0 ? (
                        <button><NavLink to="/shop" className="navLink">Agregar Productos</NavLink></button>
                        ) : (
                            <button onClick={handleBuy}>COMPRAR</button>
                        )
                    }
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Cart;
