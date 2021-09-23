import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ItemList from '../components/ItemList';


const Category = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const { category } = useParams()

    console.log(category)


    const getProducts = () => {
        fetch(`http://localhost:3001/products?category=${category}`)
        .then(( response ) => {
            if( response.ok ) {
                return response.json()
            } else {
                throw response
            }
        })
        .then(( data ) => setProducts( data ))
        .catch(( error ) => setError( error ))
        .finally(() => {
            console.log(products)
            setLoading( false )
        })
    }

    useEffect(() => {
        getProducts()
    }, [])
    
    return (
        <div>
            { loading && <h1>Cargando...</h1> }
            { error && ( <p> Se ha producido un error: {error.status} {error.statusText} </p> ) }
            { products && ( <ItemList products={ products }/> ) }
        </div>
    )
}

export default Category