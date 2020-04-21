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
                console.log('res.data: ', res.data);
                console.log('state: ', this.state);
                this.setState({
                    friends: res.data,
                });
            })
            .catch((err) => console.log('error', err));
    };

    formatThisData = () => {
        const formatedData = [];
        console.log('this.state: ', this.state);

        return formatedData;
    };

    render() {
        const friends = this.formatThisData();
        return (
            <section>
                <h1>List of Friends:</h1>
                {console.log('aaaayyyykiiiidd: ', this.state.friends)}
                {this.state.friends.map((value) => {
                    console.log('mapped: ', value.name);
                })}
                {this.state.friends.map((value) => {
                    return (
                        <div key={value.id}>
                            <h3>Hey there, I am {value.name}!</h3>
                            <h5>
                                I am {value.age} years old. If ya wanna talk,
                                this is my email: {value.email}
                            </h5>
                        </div>
                    );
                })}
            </section>
        );
    }
}

export default FriendsList;
