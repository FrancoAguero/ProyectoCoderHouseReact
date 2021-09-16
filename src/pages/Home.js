import React, { useEffect, useState } from 'react';

//Data
import data from '../assets/data/data';

// Material UI
import { Grid } from '@material-ui/core';
import CardContainer from '../components/CardContainer';

const Home = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    
    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 3000)
        })  
    }

    useEffect(() => {
        setLoading(true)
        getProducts()
        .then((response) => {
            setProducts(response)
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [products])

    return (
        <div>
            <Grid container spacing={5} justifyContent="center" alignItems="center">
                {
                    loading ? (<h1>Cargando...</h1>) 
                    :
                    products?.map((product) => (
                        <Grid key={product.id} item xs={4}>
                            <CardContainer img={product.img} title={product.name} price={product.price}/>
                        </Grid>
                        )
                    )
                }
            </Grid>
        </div>
    );
};

export default Home;
