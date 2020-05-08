import React from 'react'
import Typography from '@material-ui/core/Typography';
import {Container, Button} from '@material-ui/core';
import {Link} from "react-router-dom"

const WelcomePage = () => {
    return (
        <Container fixed maxWidth="sm">
        <Typography component="div" style={{ marginTop:"7em", textAlign:"center" }}>Welcome, Please <Button color="primary" component={Link} to="/login">log in </Button>to see your Portfolio</Typography>
      </Container>
    )
}

export default WelcomePage