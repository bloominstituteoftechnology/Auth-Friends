import React from 'react';

import { authenticAxios } from '../utils/authenticAxios';

class Add extends React.Component {
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
                console.log('res.data: ', res.data);
                console.log('state: ', this.state);
                this.setState({
                    friends: res.data,
                });
            })
            .catch((err) => console.log('error', err));
    };
}

export default Add;
