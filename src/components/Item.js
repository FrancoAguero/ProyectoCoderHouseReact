import React, { useEffect } from 'react';
import { Typography, Grid, Chip } from '@material-ui/core';
import { useHistory } from 'react-router';
import {Star, LocalOffer } from '@material-ui/icons';

//Estilos
import "../assets/styles/ProductCard.scss";
import { useCart } from '../context/CartContext';

const CardContainer = ({id, img, title, price, discount}) => {
    const { addItem } = useCart()

    const history = useHistory()

    const handleNavigation = () => {
        history.push(`/itemDetail/${id}`)
    }

    const handleClick = () => {
        addItem({id, title, price, discount}, 1)
    }

    const persent = (price, percent) => {
        return Math.trunc(price - ((price * percent) / 100))
    }

    return (
        <div>
            <Grid container justifyContent="center" spacing={2} className="card">
                <Grid item xs={12}>
                    <img src={require(`../assets/img/${title}.jpg`).default} className="card_img" alt={`${title}`} onClick={handleNavigation}/>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="h6" className="title">{title}</Typography>
                    <Typography variant="body2" className="subtitle">{title}</Typography>
                    { discount.state ? (
                        <>
                            <Typography variant="body2" className="discount">
                                {`$ ${price}`}
                            </Typography>
                            <Typography variant="h5" className="price">
                                {`$ ${persent(price, discount.percent)}`}
                            </Typography>
                        </>
                    ) : (
                        <>
                            <Typography variant="h5" className="price">
                                {`$ ${price}`}
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
                    <button onClick={handleClick}> Agregar al carro </button>
                </Grid>
                { discount.state && <Chip icon={<LocalOffer className="discount_icon"/>} label={`${discount.percent}%`} className="discount_chip"/> }
            </Grid>
        </div>
    )
}

export default CardContainer
