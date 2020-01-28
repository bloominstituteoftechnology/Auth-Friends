import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  nav: {
    width: '100%',
    background: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    padding: 10,
    margin: 20,
    fontSize: '1rem'
  },
})

const NavBar = (props) => {
  const classes = useStyles();
  return (
    <>
      <nav className={classes.nav}>
        <Link className={classes.link} to="/login">Login</Link>
        <Link className={classes.link} to="/protected">Protected Page</Link>
      </nav>
    </>
  )
}

export default NavBar;