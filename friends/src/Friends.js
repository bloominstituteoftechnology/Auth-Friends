import React from "react";
import Loader from "react-loader-spinner";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";

class Friends extends React.Component {
    state = {
        friends: [],
        isLoading: false
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        // fetch data for friends
        // BUT... only fetch data if user is authenticated
        this.setState({
            isLoading: true
        });
        axiosWithAuth()
            .get("api/friends")
            .then((res) => {
                console.log(res)
                // res.data.data
                this.setState({
                    friends: res.data,
                    isLoading: false
                });
            })
            .catch((err) => console.log(err));
    };

    render() {
        return (
            <>
                {this.state.isLoading && (
                    <div className="key spinner">
                        <Loader type="Hearts" color="#FF0000" height={80} width={80} />
                        <p>Loading Data</p>
                    </div>
                )}
                <div className='options'>
                    <Link to='/FriendsAdd'>Add Friends 👦 </Link>
                    <Link to='/FriendsDelete'>Delete Friends </Link>
                    <Link to='/FriendsEdit'>Edit Friends </Link>
                </div>

                <div className='friendList'> Friends
                {this.state.friends.map(item => (
                    <div>
                        <p> Name: 💗 {item.name} </p>
                        <p> Age: {item.age} </p>
                        <p> Email: {item.email} </p>
                    </div>
                ))}
                </div>
            </>
        )
    }
}

export default Friends;