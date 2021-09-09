import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        width: '80%',
        boxShadow: '8px 8px 10px rgba(0, 0, 0, 0.25);'
    },
    media: {
        height: "30vh",
        width: "100%",
        objectFit: 'cover'
    },
});

const CardContainer = ({img, title, description}) => {
    const classes = useStyles()

    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={img}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Divider />
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default CardContainer
