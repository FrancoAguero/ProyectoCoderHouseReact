import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

//Custom Component
import Item from "../components/ItemDetail/ItemDetail"

const ItemDetail = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        fetch(`http://localhost:3001/products/${itemId}`)
        .then(( response ) => {
            if( response.ok ) {
                return response.json()
            } else {
                throw response
            }
        })
        .then(( data ) => setProduct( data ))
        .catch(( error ) => setError( error ))
        .finally(setLoading( false ))
    },[])

    return (
        <>
            { loading && <h1>Cargando...</h1> }
            { error && ( <p> Se ha producido un error: {error.status} {error.statusText} </p> ) }
            { product && ( <Item id={product.id} img={product.img} name={product.name} price={product.price}/> ) }
        </>
    )
}

export default ItemDetail
