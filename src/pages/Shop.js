import React, { useEffect, useState } from 'react'

import { Grid, CircularProgress } from '@material-ui/core'
import ItemList from '../components/Item/ItemList'
import { getFirestore } from '../firebase'
import { useParams } from 'react-router'
import CategoryBar from '../components/CategoryBar'

const Shop = () => {
    const db = getFirestore()
    const [ products, setProducts ] = useState( [] )
    const [ loading, setLoading ] = useState( true )
    const [ error, setError ] = useState( null )

    const handleCategory = ( id ) => {
        setProducts([])
        setLoading( true )
        if(id !== 0) {
            db.collection( "products" ).where( "categoryId", "==", id ).get()
                .then(( response ) => {
                    if( response.empty ) {
                        console.log("No tienen datos")
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
        } else {
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
        }
    }

    useEffect(() => {
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
            <CategoryBar handleCategory={ handleCategory } />
            <Grid container spacing={5} justifyContent="center" alignItems="center" className="shop_product_container">
                { loading && <CircularProgress color="primary"/> }
                { error && ( <p> Se ha producido un error: { error.status } { error.statusText } </p> ) }
                { products && ( <ItemList products={ products }/> ) }
            </Grid>
        </>
    )
}

export default Shop