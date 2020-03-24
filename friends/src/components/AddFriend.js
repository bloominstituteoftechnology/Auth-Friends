import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';

class AddFriend extends React.Component{
    constructor(){
        super();
        this.state = {friend: {name: '', age: '', email: '' }}
    }
    submitHandler = (event) => {
        event.preventDefault();
        axiosWithAuth()
        .post("/api/friends", this.state.friend, {
            headers:
            {authorization: window.localStorage.getItem('token')}
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
    changeHandler = (event) => {
        this.setState( {friend: {...this.state.friend, [event.target.name]: event.target.value}})
        console.log(this.state)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <input onChange={this.changeHandler} name="name" placeholder="Name"/>
                    <input onChange={this.changeHandler} name="age" placeholder="Age"/>
                    <input onChange={this.changeHandler} name="email" placeholder="Email"/>
                    <button>ADD</button>
                </form>
            </div>
        )
    }
}


export default AddFriend;