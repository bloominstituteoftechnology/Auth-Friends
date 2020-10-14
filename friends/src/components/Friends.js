import React from "react";
import moment from "moment";
import Loader from "react-loader-spinner";

import { axiosWithAuth } from "./../axios/axiosWithAuth";

class Friends extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        axiosWithAuth()
        .get("api/friends")
        .then((res) => {
            this.setState({
                friends: res.data 
            });
        .catch((err) => {
            console.log(err);
        });
    };

    
