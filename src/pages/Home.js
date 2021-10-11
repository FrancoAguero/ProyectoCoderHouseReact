import React, { useEffect, useState } from 'react';

// Material UI
import { Grid, List, ListItem, CircularProgress, Typography } from '@material-ui/core';
import ItemList from '../components/Item/ItemList';

import { Link } from 'react-router-dom'
import { getFirestore } from '../firebase';

const Home = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const db = getFirestore()
        db.collection("products").where('discount.state', '==', true).get()
            .then((response) => {
                if(response.empty){
                    console.log("No tiene datos")
                } else {
                    setProducts(response.docs.map((doc) => ({id: doc.id, ...doc.data()})))
                }
            })
            .catch((error) => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div>
            <Grid container justifyContent="center" alignItems="center" className="title_container">
                <Grid item xs={6} className="home_title">
                    <Typography variant="h2" className="title_tienda">Tienda</Typography>
                    <Typography variant="h1" className="title_online">Online</Typography>
                    <Typography  variant="subtitle1">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis non nihil exercitationem at dolores animi? Cupiditate provident nihil 
                        repellat, corporis totam, esse similique reiciendis consequatur assumenda quidem mollitia expedita dolorum.
                    </Typography>
                    <Link to="/shop">
                        <button>Ver Productos</button>
                    </Link>
                </Grid>
                <Grid item xs={6} className="home_img_background">
                    <img src={require('../assets/img/3967148.png').default} className="home_img" alt="" />
                </Grid>
                <div className="background_curve"/>
            </Grid>
            <Grid container spacing={5} justifyContent="center" alignItems="center" className="home_product_container">
                <Grid item xs={12} className="title_discount">
                    <Typography variant="h3" className="title">Descuentos</Typography>
                    <Typography variant="subtitle1" className="subtitle"> hasta el 80%</Typography>
                </Grid>
                { loading && <CircularProgress color="primary"/> }
                { error && ( <p> Se ha producido un error: {error.status} {error.statusText} </p> ) }
                { products && ( <ItemList products={ products }/> ) }
            </Grid>
        </div>
    );
};

export default Home;
