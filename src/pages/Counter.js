import React from 'react'

//Material UI
import { Grid } from '@material-ui/core'
import ItemCount from '../components/ItemCount'


const Counter = () => {
    return (
        <Grid container spacing={5} justifyContent="center" alignItems="center">
            <Grid item xs={12} alignItems={'center'}>
                <ItemCount initialState={0}/>
            </Grid>
        </Grid>
    )
}

export default Counter;
