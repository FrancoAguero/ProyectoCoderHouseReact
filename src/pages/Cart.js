import React from 'react'

//Custom Components
import ItemCart from "../components/ItemCart/ItemCart"

//Material UI
import { Grid } from '@material-ui/core'

//Context
import { useCart } from '../context/CartContext'

const Cart = () => {
    const { cart } = useCart()
    
    return (
        <Grid container justifyContent="center" alignItems="center">
            {cart.length === 0 ? (
                    <></>
                ) : 
                    cart.map((item) => (
                        <ItemCart data={item}/>
                    ))
            }
        </Grid>
    )
}

export default Cart
