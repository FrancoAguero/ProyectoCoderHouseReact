import React from 'react';

import firebase from "firebase/compat/app"

//Custom Components
import ItemCart from "../components/ItemCart/ItemCart";

//Material UI
import { Grid, Typography, Divider } from '@material-ui/core';

//Style
import "../assets/styles/Cart.scss";

//Context
import { useCart } from '../context/CartContext';
import { NavLink } from 'react-router-dom';
import { getFirestore } from '../firebase';

const Cart = () => {
    const { cart,  getTotal, getIva, clear } = useCart();

    const handleBuy = () => {
        const db = getFirestore()
        db.collection("orders").add({
            buyer: {name: "Franco", phone: 123456, email: "email@gmail.com"},
            items: cart,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            total: getTotal()
        })
            .then((docRef) => console.log(docRef))
            .catch((error) => console.log(error))
            .finally(() => clear())
    }
    
    return (
        <Grid container justifyContent="center" alignItems="center" className="cart_container">
            <Grid item xs={12}>
                <Typography variant="h3">Carrito</Typography>
            </Grid>
            <Grid item xs={8}>
                {cart.length === 0 ? (
                    <></>
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
