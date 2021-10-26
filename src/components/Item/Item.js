//React
import React, { useEffect } from 'react';

//Material UI
import { Typography, Grid, Chip } from '@material-ui/core';
import {Star, LocalOffer } from '@material-ui/icons';
import  { useSnackbar } from "notistack"

//React-router
import { useHistory } from 'react-router';

//Estilos
import "../../assets/styles/ProductCard.scss";
import { useCart } from '../../context/CartContext';

const CardContainer = ({id, img, name, price, discount}) => {
    const { addItem } = useCart()
    const { enqueueSnackbar } = useSnackbar()

    const history = useHistory()

    const handleNavigation = () => {
        history.push( `/itemDetail/${id}` )
    }

    const handleClick = () => {
        addItem( { id, name, img, price, discount }, 1 )
        enqueueSnackbar( `Se agrego ${ name } al carrito!`, { variant: "success" } )
    }

    const persent = (price, percent) => {
        return Math.trunc(price - (( price * percent ) / 100))
    }

    return (
        <div>
            <Grid container justifyContent="center" spacing={2} className="card">
                <Grid item xs={12}>
                    <img src={require(`../../assets/${ img }`).default} className="card_img" alt={`${ name }`} onClick={ handleNavigation }/>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="h6" className="title">{ name }</Typography>
                    <Typography variant="body2" className="subtitle">{ name }</Typography>
                    { discount.state ? (
                        <>
                            <Typography variant="body2" className="discount">
                                {`$ ${ price }`}
                            </Typography>
                            <Typography variant="h5" className="price">
                                {`$ ${persent( price, discount.percent )}`}
                            </Typography>
                        </>
                    ) : (
                        <>
                            <Typography variant="h5" className="price">
                                {`$ ${ price }`}
                            </Typography>
                        </>
                    )}
                    <Star className="card_star active"/>
                    <Star className="card_star active"/>
                    <Star className="card_star active"/>
                    <Star className="card_star"/>
                    <Star className="card_star"/>
                </Grid>
                <Grid item xs={12} className="button_container">
                    <button onClick={ handleClick }> Agregar al carro </button>
                </Grid>
                { discount.state && <Chip icon={<LocalOffer className="discount_icon"/>} label={`${ discount.percent }%`} className="discount_chip"/> }
            </Grid>
        </div>
    )
}

export default CardContainer
