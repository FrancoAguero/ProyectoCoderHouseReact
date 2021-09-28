import React, { useEffect, useState } from 'react'

import { Grid, AppBar, Toolbar, Typography } from '@material-ui/core'
import ItemList from '../components/ItemList'

const Shop = () => {
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
        <>
            <div className="category_bar">
                <ul>
                    <li>Mothers</li>
                    <li>Procesadores</li>
                    <li>Memorias Ram</li>
                    <li>Placas de Viedos</li>
                    <li>Gabinetes</li>
                    <li>Fuentes</li>
                </ul>
            </div>
            <Grid container spacing={5} justifyContent="center" alignItems="center" className="shop_product_container">
                { loading && <h1>Cargando...</h1> }
                { error && ( <p> Se ha producido un error: {error.status} {error.statusText} </p> ) }
                { products && ( <ItemList products={ products }/> ) }
            </Grid>
        </>
    )
}

export default Shop