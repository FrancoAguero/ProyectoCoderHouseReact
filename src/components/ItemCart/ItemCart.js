import React from 'react'

//Material UI
import { Grid, Typography } from "@material-ui/core"
import { Clear } from "@material-ui/icons"

//Style
import '../../assets/styles/Cart.scss'
import { useCart } from '../../context/CartContext'


const ItemCart = ({data}) => {
    const { removeItem } = useCart()
    const {id, name, img, price } = data.product
    const quantity = data.quantity

    const handleRemoveItem = () => {
        removeItem(data.product)
    }
    
    return (
        <Grid key={id} item container xs={12} direction="row" className="cart_item_container">
            <Grid item container justifyContent="center" xs={3}>
                <img src={require(`../../assets/${img}`).default} alt={`${name}`} />
            </Grid>
            <Grid item xs={4}>
                <Typography variant="body2" className="cart_title">Nombre</Typography>
                <Typography variant="body1" className="cart_title_value">{name}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography variant="body2" className="cart_title">Precio</Typography>
                <Typography variant="body1" className="cart_title_value">{price}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography variant="body2" className="cart_title">Cantidad</Typography>
                <Typography variant="body1" className="cart_title_value">{quantity}</Typography>
            </Grid>
            <Grid item xs={1} container className="btn_delete" onClick={handleRemoveItem}>
                <Clear />
            </Grid>
        </Grid>
    )
}

export default ItemCart
