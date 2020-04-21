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
            .get('/api/data')
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    };

    render() {
        return null;
    }
}

export default FriendsList;
