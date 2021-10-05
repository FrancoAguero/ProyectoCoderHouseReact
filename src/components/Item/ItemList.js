import React, { useEffect } from 'react';

//Custom Components
import Item from './Item';

//Material UI
import { Grid } from '@material-ui/core';
import { useCart } from '../../context/CartContext';


const ItemList = ({ products }) => {
    const { cart } = useCart()

    useEffect(() => {
        console.log(cart)
    }, [cart])
    
    return (
        <>
            {
                products?.map((product) => (
                        <Grid key={product.id} item xs={3}>
                            <Item id={product.id} img={product.img} name={product.name} price={product.price} discount={product.discount}/>
                        </Grid>
                    )
                )
            }
        </>
    );
};

export default ItemList;
