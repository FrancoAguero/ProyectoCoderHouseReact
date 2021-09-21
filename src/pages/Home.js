import React, { useEffect, useState } from 'react';

// Material UI
import { Grid } from '@material-ui/core';
import ItemList from '../components/ItemList';

const Home = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    const getProducts = () => {
        fetch("http://localhost:3001/products")
        .then(( response ) => {
            if( response.ok ) {
                return response.json()
            } else {
                throw response
            }
        })
        .then(( data ) => setProducts( data ))
        .catch(( error ) => setError( error ))
        .finally(setLoading( false ))
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>
            <Grid container spacing={5} justifyContent="center" alignItems="center">
                { loading && <h1>Cargando...</h1> }
                { error && ( <p> Se ha producido un error: {error.status} {error.statusText} </p> ) }
                { products && ( <ItemList products={ products }/> ) }
            </Grid>
        </div>
    );
};

export default Home;
