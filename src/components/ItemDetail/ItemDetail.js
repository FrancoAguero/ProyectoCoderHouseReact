//React
import React, { useState } from 'react'

//Custom Components
import Counter from './ItemCount';

//Material ui
import { Grid, Link, Typography } from '@material-ui/core';
import { Star } from '@material-ui/icons';
import  { useSnackbar } from "notistack"


//Style
import '../../assets/styles/DetailCard.scss';

//Context
import { useCart } from '../../context/CartContext';

//Router
import { useHistory } from "react-router-dom"


const ItemDetailCard = ({id, img, name, price }) => {
    const { addItem } = useCart()
    const [cart, setCart] = useState(false)
    const [count, setCount] = useState(1)
    const { enqueueSnackbar } = useSnackbar()
    const history = useHistory()

    const handleClick = () => {
        addItem({id, name, img, price}, count)
        enqueueSnackbar( `Se agrego ${ name } al carrito!`, { variant: "success" } )
        setCart((previousState) => !previousState)
    }

    const handleRoute = () => {
        history.push("/cart")
    }
    
    return (
        <Grid container spacing={5} className="detail_container">
            <Grid item container xs={6}>
                <Grid item xs={12} className="img_container">
                    <img src={require(`../../assets/${img}`)?.default} className="primary_img" alt="" />
                </Grid>
                <Grid item xs={3}>
                    <img src={require(`../../assets/${img}`)?.default} className="secondary_img" alt="" />
                </Grid>
                <Grid item xs={3}>
                    <img src={require(`../../assets/${img}`)?.default} className="secondary_img" alt="" />
                </Grid>
                <Grid item xs={3}>
                    <img src={require(`../../assets/${img}`)?.default} className="secondary_img" alt="" />
                </Grid>
                <Grid item xs={3}>
                    <img src={require(`../../assets/${img}`)?.default} className="secondary_img" alt="" />
                </Grid>
            </Grid>
            <Grid item xs={6} className="">
                <Typography variant="h4" component="h2" className="title">
                    {name}
                </Typography>
                <div className="star_container">
                    <Star className="star active"/>
                    <Star className="star active"/>
                    <Star className="star active"/>
                    <Star className="star"/>
                    <Star className="star"/>
                </div>
                <Typography variant="body1" className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit pariatur in porro, ipsam vero illo. 
                    Totam, accusamus commodi! Labore aut praesentium reprehenderit temporibus molestiae, doloribus exercitationem recusandae libero ratione velit.
                </Typography>
                {!cart ?
                    <>
                        <Typography variant="body1" className="text_counter">
                            Cantidad
                        </Typography>
                        <Counter count={count} setCount={setCount}/>
                    </>
                    :
                    <></>
                }
                <Typography variant="h3" className="price">
                    $ {price}
                </Typography>
                {!cart ? 
                    <button className="buy_button" onClick={handleClick}>
                        <Typography variant="body1">
                            Agregar
                        </Typography>
                    </button>
                    :
                    <button className="buy_button" onClick={handleRoute}>
                        <Typography variant="body1">
                            Ir al Carro
                        </Typography>
                    </button>
                }
            </Grid>
            <div className="rectangle"/>
        </Grid>
    );
};

export default ItemDetailCard;
