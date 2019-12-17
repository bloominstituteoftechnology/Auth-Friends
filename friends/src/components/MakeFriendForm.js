import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


class MakeFriendForm extends React.Component {
    state = {
        friend: {
            id: Date.now(),
            name: '',
            age: '',
            email: ''
        }
    }

    handleChange = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        });
    };

    makeFriend = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/friends', this.state.friend)
        .then(res => {
            this.props.history.push('/friends');
        })
    }

    render() {
        return (
            <div>
                <h2>Make A Friendo</h2>
                <form onSubmit={this.makeFriend}>
                    Name:<input type='text' name='name' value={this.state.friend.name} onChange={this.handleChange}/>
                    Age:<input type='text' name='age' value={this.state.friend.age} onChange={this.handleChange} />
                    Email:<input type='text' name='email' value={this.state.friend.email} onChange={this.handleChange} />
                    <button>Make Friend</button>
                </form>
            </div>
        )
    }
}

export default MakeFriendForm