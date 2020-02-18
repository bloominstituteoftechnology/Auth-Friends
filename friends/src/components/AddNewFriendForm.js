import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class AddNewFriendForm extends React.Component{
    state = {
        friendInfo: {
            name: '',
            age: Number,
            email: '',
            id: Number
        }
    };
    handleChange = e => {
        this.setState({
            friendInfo: {
                ...this.state.friendInfo,
                [e.target.name]:e.target.value
            }
        });
    };

    addNewFriend = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/friends', this.state.friendInfo)
        .then(res => {
            console.log("ADD FRIEND form", res)
            
        })
        .catch(err => {
            console.log("Erorr in addNewFriend FORM", err)
        })
    }
    render(){
        return (
            <div className ='newFriendForm'>
                <form onSubmit={this.addNewFriend}>
                    <input
                        type='text'
                        name='name'
                        placeholder='Friend Name'
                        value={this.state.name}
                        onChange ={this.handleChange}
                    />
                    <input
                        type='number'
                        name='age'
                        placeholder='Friend age'
                        value={this.state.age}
                        onChange ={this.handleChange}
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='Friend email'
                        value={this.state.email}
                        onChange ={this.handleChange}
                    />
                    <button>Add friend</button>
                </form>
            </div>
        )
    }
}
export default AddNewFriendForm;