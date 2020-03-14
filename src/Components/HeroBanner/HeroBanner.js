import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles } from '@material-ui/core/styles'

var useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    textParam: {
        fontFamily: 'BlinkMacSystemFont',
        textAlign: 'center',
        fontSize: '42px',
        fontWeight: 'bold',
        '@media (min-width:760px)': {
            fontSize: '27px',
            
            fontFamily: 'Roboto',
            textAlign: 'center',
            
          },
    },
    textParam1: {
        fontFamily: 'BlinkMacSystemFont',
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: 'normal',
        '@media (min-width:760px)': {
            fontSize: '16px',
            
            fontFamily: 'Roboto',
            textAlign: 'center',
            
          },
    },
    textMargin:{
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(14),
        '@media (min-width:760px)': {
            
          },
    }
    
  }));

//var classes;
export default function HeroBanner(){
    const classes = useStyles();
    

        return(
            <div><Container className={classes.textMargin}>
                    <Typography className={classes.textParam}>
                        Popular Products
                    </Typography>
                    <Typography className={classes.textParam1}>
                        High on demand items
                    </Typography>
                </Container>
            </div>
        )

    




}