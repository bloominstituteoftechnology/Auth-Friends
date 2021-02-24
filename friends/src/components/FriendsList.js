import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        friends: [],
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
        .get('/api/friends')
        .then((res) => {
            console.log(res.data);
            this.setState({
             friends: res.data
            })
        })
        .catch((err) => console.log({ err }));
    }



    formatData = () => {
        const formattedData = [];
        this.state.friends.forEach((friend) => {
            if (friend) {
                formattedData.push({
                    name: friend.name,
                    age: friend.age,
                    email: friend.email
                });
            }
        })
        console.log(formattedData);
        return formattedData;
    }

    render() {
        const friend = this.formatData();
        return (
            <div>
                {friend.map((f) => (
                    <div>
                    <p>Name: {f.name}</p>
                    <p>Age: {f.age}</p>
                    <p>Email: {f.email}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default FriendsList;