import React from 'react';
import {axiosWithAuth} from '../utilities/axiosWithAuth';

class AddFriend extends React.Component {
    constructor(){
        super();
        this.state = {newFriend: {
            name: '',
            age: '',
            email: '',
        }}
    }
    newFriendHandler = (e) => {
        e.preventDefault();
        axiosWithAuth().post('/api/friends', this.state.newFriend)
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err))
    }
    changeHandler = (e) => {
        this.setState({friend: {
            ...this.state.newFriend,
            [e.target.name]: e.target.value
        }})
    }
    render(){
        return(
            <div>
                <h1>New Friend</h1>
                <form onSubmit={this.newFriendHandler}>
                    <input onChange={this.changeHandler}
                    name='name'
                    placeholder='new friend'
                    />
                    <input onChange={this.changeHandler}
                    name='age'
                    placeholder='how old are you?'
                    />
                    <input onChange={this.changeHandler}
                    name='email'
                    placeholder='email'/>
                    <button>New Friend</button>

                </form>
            </div>
        )
    }
}
export default AddFriend;