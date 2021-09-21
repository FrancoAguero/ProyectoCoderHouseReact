import React from 'react'
import { Grid, Typography } from '@material-ui/core';


const ItemDetailCard = ({title, price}) => {
    const style = {
        img: {
            height: '500px',
            width: '100%'
        }
    }
    
    return (
        <Grid container spacing={5} justifyContent="center" alignItems="center">
            <Grid item xs={6}>
                <img src={require(`../assets/img/${title}.jpg`)?.default} style={style.img} alt="" />
            </Grid>
            <Grid item xs={6}>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                    Precio: ${price}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default ItemDetailCard
