import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';


class AddFriend extends React.Component{
    state = {
            friend: {
                name: '', 
                age: '', 
                email: '' }
            
        }

    submitHandler = e => {
        e.preventDefault();
        axiosWithAuth()
        .post("/api/friends", this.state.friend)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    changeHandler = e => {
        e.preventDefault();
        this.setState( {friend: {...this.state.friend, [e.target.name]: e.target.value}})
        console.log(this.state)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <input 
                        onChange={this.changeHandler} 
                        name='name' 
                        placeholder='name'
                        type='text'
                    />
                    <input 
                        onChange={this.changeHandler} 
                        name='age' 
                        placeholder='age'
                        type='number'
                    />
                    <input 
                        onChange={this.changeHandler} name='email' 
                        placeholder='email'
                        type='email'
                    />
                    <button type="submit">Add Friend</button>
                </form>
            </div>
        )
    }
}


export default AddFriend