import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, InputBase, Button, IconButton} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import Container from '@material-ui/core/Container/'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'

//colors can be changed, Store Logo can be be a button that redirects to Landing Page
//number for cart can be updated dynamically 
const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  navButton: {
    margin: theme.spacing(1),
    color: 'white',
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    height: '100%',
    color: 'white',
    position: "relative"
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 0, 1, 2),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  color:{
    background: 'linear-gradient(45deg, #0A2239 10%, #176087 90%)',
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <Container>
        <AppBar position="fixed" className = {classes.color}>
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Store Logo
            </Typography>
              <div className={classes.search}>
                <InputBase
                  placeholder="Search…"
                  classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
                <IconButton className = {classes.searchIcon} size = "small">
                  <SearchIcon />
                </IconButton>
                </div>
              <div className={classes.grow} />
                <Button className={classes.navButton}>
                  Products
                </Button>
                <Button className = {classes.navButton}>
                  About Us
                </Button>
                <Button className = {classes.navButton}>
                  Account
                </Button>
                <Button className = {classes.navButton}> 
                  <AddShoppingCartIcon/>
                  (0)
                </Button>
          </Toolbar>
        </AppBar>
      </Container>
    </div>
  );
}
