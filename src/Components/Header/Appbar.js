import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, InputBase} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import Container from '@material-ui/core/Container/'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
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
            Home
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
      </Container>
    </div>
  );
}
