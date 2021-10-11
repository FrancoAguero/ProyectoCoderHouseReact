import React, { useEffect, useState } from 'react'

import { Grid, CircularProgress } from '@material-ui/core'
import ItemList from '../components/Item/ItemList'
import { getFirestore } from '../firebase'
import { useParams } from 'react-router'
import CategoryBar from '../components/CategoryBar'

const Shop = () => {
    const [ products, setProducts ] = useState( [] )
    const [ loading, setLoading ] = useState( true )
    const [ error, setError ] = useState( null )
    const [ anchorEL, setAnchorEL ] = useState( null )

    const { category } = useParams()

    console.log(category)

    useEffect(() => {
        const db = getFirestore()
        db.collection( "products" ).get()
            .then(( response ) => {
                if( response.empty ) {
                    console.log("No tiene datos")
                } else {
                    setProducts( response.docs.map(( doc ) => ({ id: doc.id, ...doc.data() })) )
                }
            })
            .catch(( error ) => {
                setError( error )
            })
            .finally(() => {
                setLoading( false )
            })
    }, [])

    return (
        <>
            <CategoryBar />
            <Grid container spacing={5} justifyContent="center" alignItems="center" className="shop_product_container">
                { loading && <CircularProgress color="primary"/> }
                { error && ( <p> Se ha producido un error: { error.status } { error.statusText } </p> ) }
                { products && ( <ItemList products={ products }/> ) }
            </Grid>
        </>
    )
}

export default Shop