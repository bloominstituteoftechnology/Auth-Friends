import React from 'react';

import { authenticAxios } from '../utils/authenticAxios';

class FriendsList extends React.Component {
    state = {
        friends: [],
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        authenticAxios()
            .get('/api/friends')
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    };

    render() {
        return <h1>test</h1>;
    }
}

export default FriendsList;
