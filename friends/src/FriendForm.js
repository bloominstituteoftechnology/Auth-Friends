import React from 'react'
import axios from 'axios'

class FriendForm extends React.Component {
    state = {
        friends: {
            id: 1,
            name: '',
            age: '',
            email: ''
        }
    };

    handleEdit = e => {
        this.setState({
            friends: {
                ...this.state.friends,
                [e.target.name]: e.target.value
            }
        });
    };

    handleDelete = e => {
        this.setState({
            freinds: {
                ...this.state.friends
            }
        })

    }
}
