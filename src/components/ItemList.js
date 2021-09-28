import React from 'react';

//Custom Components
import Item from './Item';

//Material UI
import { Grid } from '@material-ui/core';


const ItemList = ({ products }) => {
    return (
        <>
            {
                products?.map((product) => (
                        <Grid key={product.id} item xs={3}>
                            <Item id={product.id} img={product.img} title={product.name} price={product.price} discount={product.discount}/>
                        </Grid>
                    )
                )
            }
        </>
    );
};

export default ItemList;
