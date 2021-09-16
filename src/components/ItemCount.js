import React, { useState } from 'react'

//Material UI
import { Avatar, ButtonGroup, Button } from '@material-ui/core';

const styles = {
    container: {
        display: "flex",
        justifyContent: 'center',
        flexDirection: "column",
        alignItems: 'center'
    },
    counter: {
        margin: '20px',
        height: '100px',
        width: '100px',
        fontSize: 40
    }
}

const ItemCount = ({ initialState }) => {
    const [count, setCount] = useState(initialState)

    const handleClick = (type) => {
        if(type === 'imcrementar'){
            setCount(previousState => previousState + 1)
        }
        if(type === 'decrementar') {
            setCount(previousState => previousState - 1)
        } 
        if(type === 'resetear') {
            setCount(initialState)
        }
    }
    
    return (
        <div style={styles.container}>
            <Avatar style={styles.counter}>{count}</Avatar>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                <Button onClick={() => handleClick('decrementar')}> -1 </Button>
                <Button onClick={() => handleClick('resetear')}> reset </Button>
                <Button onClick={() => handleClick('imcrementar')}> +1 </Button>
            </ButtonGroup>
        </div>
    )
}

export default ItemCount
