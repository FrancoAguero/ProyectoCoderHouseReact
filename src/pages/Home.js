import React, { useEffect, useState } from 'react';

// Material UI
import { Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import ItemList from '../components/ItemList';

import { NavLink } from 'react-router-dom'

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
            <Grid container justifyContent="center" alignItems="center" className="title_container">
                <Grid item xs={6} className="home_title">
                    <Typography variant="h2" className="title_tienda">Tienda</Typography>
                    <Typography variant="h1" className="title_online">Online</Typography>
                    <Typography  variant="subtitle1">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis non nihil exercitationem at dolores animi? Cupiditate provident nihil 
                        repellat, corporis totam, esse similique reiciendis consequatur assumenda quidem mollitia expedita dolorum.
                    </Typography>
                    <button>Ver Productos</button>
                </Grid>
                <Grid item xs={6} className="home_img_background">
                    <img src={require('../assets/img/3967148.png').default} className="home_img" alt="" />
                </Grid>
                <div className="background_curve"/>
            </Grid>
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button>
                    <NavLink to={`/category/gabinetes`}>
                        Gabinetes
                    </NavLink>
                </ListItem>
                <ListItem button>
                    <NavLink to={`/category/Mother`}>
                        Mothers
                    </NavLink>
                </ListItem>
                <ListItem button>
                    <NavLink to={`/category/Memoria Ram`}>
                        Memoria Ram
                    </NavLink>
                </ListItem>
                <ListItem button>
                    <NavLink to={`/category/Placas de Videos`}>
                        Placas de Videos
                    </NavLink>
                </ListItem>
            </List>
            <Grid container spacing={5} justifyContent="center" alignItems="center" className="product_container">
                { loading && <h1>Cargando...</h1> }
                { error && ( <p> Se ha producido un error: {error.status} {error.statusText} </p> ) }
                { products && ( <ItemList products={ products }/> ) }
            </Grid>
        </div>
    );
};

export default Home;
