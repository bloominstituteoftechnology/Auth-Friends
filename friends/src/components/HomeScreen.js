import React from 'react';
import Header from "./Header";
import {Button} from "@material-ui/core";
import { Link } from 'react-router-dom';


function HomeScreen() {
    return (
        <div className="homeScreen">
            <Header />
            <div className="homeScreen__body">
                <h1>React Friend's List</h1>
                <p>
                This project renders a list of friends and provides users the ability to add or remove friends from the database. The <br/>
                database is only viewable to users who have authenticated themselves by logging in using the username and password provided. <br/>
                I challenged myself to complete this assignment without Redux. (Which in hind sight would have made things MUCH easier...<br/>
                </p>
                <h3>Log in by clicking either the link at the top of the page or this shiny button below and enter the following login info:</h3>
                <h3>Username: Lambda School</h3>
                <h3>Password: {`i<3Lambd4`}</h3>
                <div className="homeScreen__buttonContainer">
                    <Link to="/signin">
                        <Button>Login</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen
