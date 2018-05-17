import React, { Component } from 'react';
import axios from 'axios';
import Friends from'./friends';

class FriendForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            email: "",
         }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();

        const {
            name: name,
            age: age,
            email: email
        } = this.state;


        axios.post(URL, friend)
            .then((result)=> {
                this.setState({state, friend: ''})
            })
            .catch((err) => console.log(err));
    }
        

    render() { 
        return ( 
            <div>
                <br />
                <form onSubmit = {this.onSubmit}>
                <label><b>Add Friend:</b></label>
                <input 
                    type ="text" 
                    name = "name" 
                    value= {this.state.name} 
                    onChange = {this.onChange} 
                    placeholder = "Name"
                    />
                <input 
                    type ="text" 
                    name = "age" 
                    value ={this.state.age} 
                    onChange = {this.onChange}
                    placeholder = "500 years old"
                    />
                <input 
                    type ="text" 
                    name = "email" 
                    value={this.state.email} 
                    onChange = {this.onChange}
                    placeholder = "somethingkewl@idk.com"
                    />
                <button type ="submit" className = "submit-friend" >Submit Friend</button>
                </form>
                <Friends />
            </div>
         )
    }
}
 
export default FriendForm;