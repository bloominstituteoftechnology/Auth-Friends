import React from 'react';



import { axiosWithAuth } from '../utils/axiosWithAuth';

class NewFriend extends React.Component {
    state = {
    newFriend: {
        id: Date.now(),
        name: '',
        age: '',
        email: ''
        }
    }

    componentDidMount (){
        this.addFriend();
    }

    handleChange = e => {
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [e.target.name]: e.target.value
            }
        });
    };

    addFriend = e => {
        // e.preventDefault();
        axiosWithAuth().post('/friends')
            .then(res => {
                console.log(res)
                this.setState({
                    ...this.state,
                    newFriend: {
                        id: Date.now(),
                        name: res.data.name,
                        age: res.data.age,
                        email: res.data.email
                    }
                    
                });
                // this.props.history.push("/protected");
            })
            .catch(err => console.log(err));
    }

    render() {
        return(
            <div>
                <form onSubmit={this.addFriend}>
                    <h2>Add a New Friend</h2>
                    <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={this.state.newFriend.name}
                    onChange={this.handleChange}
                    />
                    <input 
                    type="text"
                    name="age"
                    placeholder="Age"
                    value={this.state.newFriend.age}
                    onChange={this.handleChange}
                    />
                    <input 
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={this.state.newFriend.email}
                    onChange={this.handleChange}
                    />
                    <button>Add Friend</button>
                </form>
            </div>
        )
    }
}

export default NewFriend;