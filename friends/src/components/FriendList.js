import React from "react";
import { axiosWithAuth } from "../axiosWithAuth";

class FriendList extends  React.Component {
    state ={
        friends: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
        .get("/api/friends")
        .then(res => {
            this.setState({
                friends: res
            })
            .catch(error => {
                console.log("FriendList.js FriendList: getData: error.message ", error.message)
            });
        })
    };

    render() {
        return (
            <div className="Friends-Area">
                <div className="EachFriend-Card">

                </div>
            </div>
        )
    }
}

export default FriendList; 