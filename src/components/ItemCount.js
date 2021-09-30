import React, { useState } from 'react'

//Material UI
import { Button, Typography } from '@material-ui/core';

//style
import '../assets/styles/DetailCard.scss'

const styles = {
    container: {
        display: "flex",
        alignItems: 'center',
    },
    counter: {
        margin: '20px',
        height: '100px',
        width: '100px',
        fontSize: 40
    }
}

const ItemCount = ({ count, setCount }) => {
    const handleClick = (type) => {
        if(type === 'imcrementar'){
            setCount(previousState => previousState + 1)
        }
        if(type === 'decrementar') {
            setCount(previousState => {
                if(previousState > 1) {
                    return previousState - 1
                } else {
                    return 1
                }
            })
        } 
    }
    
    return (
        <div style={styles.container}>
                <Button color="primary" className="button" onClick={() => handleClick('decrementar')}> 
                    <Typography variant="h4"> - </Typography> 
                </Button>
                <div className="counter"> 
                    {count}
                </div>
                <Button color="primary" className="button" onClick={() => handleClick('imcrementar')}> 
                    <Typography variant="h4"> + </Typography> 
                </Button>
        </div>
    )
}

export default ItemCount
