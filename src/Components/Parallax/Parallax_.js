import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles(theme =>({
    parallax: {
        height: "90vh",
        maxHeight: "1000px",
        overflow: "hidden",
        position: "relative",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundColor: 'gray',
        margin: "0",
        padding: "0",
        border: "0",
        display: "flex",
        alignItems: "center"
      }
}))

export default function Parallax_(){
const classes = useStyles();
    return(
        <div className={classes.parallax}>
            
        </div>
    )

}

