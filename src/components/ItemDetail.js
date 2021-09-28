//React
import React from 'react'

//Material ui
import { Grid, Typography } from '@material-ui/core';

//Style
import '../assets/styles/DetailCard.scss';


const ItemDetailCard = ({title, price}) => {
    const style = {
        img: {
            height: '500px',
            width: '100%'
        }
    };
    
    return (
        <Grid container spacing={5} className="detail_container">
            <Grid item container xs={6}>
                <Grid item xs={12}>
                    <img src={require(`../assets/img/${title}.jpg`)?.default} style={style.img} alt="" />
                </Grid>
            </Grid>
            <Grid item xs={6} className="">
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="h5" component="h2">
                    Precio: ${price}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default ItemDetailCard;
