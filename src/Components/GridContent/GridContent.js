import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import Container from '@material-ui/core/Container'
import imag from '../../assets/img/imgbg.jpg';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  marginParam: {
      marginTop: theme.spacing(3),
  }
  
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Container>
        <Grid container spacing={3} >
            <Grid item xs={6}>
                <Paper>
                <GridList cellHeight={460} className={classes.gridList} cols={1}>
                    <img src={imag}  />
                </GridList>
                </Paper>
            </Grid>
            <Grid item xs={6}>
            <Paper>
                <GridList cellHeight={460} className={classes.gridList} cols={1}>
                    <img src={imag}  />
                </GridList>
                </Paper>    
            </Grid>
        </Grid>
    </Container>
    <Container>
        <Grid container spacing={3} className={classes.marginParam} >
            <Grid item xs={3}>
                <Paper>
                <GridList cellHeight={360} className={classes.gridList} cols={1}>
                <img src={imag}  />
                </GridList>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>
                <GridList cellHeight={360} className={classes.gridList} cols={1}>
                <img src={imag}  />
                </GridList>
                </Paper>
            </Grid>
            <Grid item xs={3}>
            <Paper>
                <GridList cellHeight={360} className={classes.gridList} cols={1}>
                <img src={imag}  />
                </GridList>
                </Paper>
            </Grid>
            <Grid item xs={3}>
            <Paper>
                <GridList cellHeight={360} className={classes.gridList} cols={1}>
                <img src={imag}  />
                </GridList>
                </Paper>
            </Grid>
        </Grid>
    </Container>
    </div>
  );
}
