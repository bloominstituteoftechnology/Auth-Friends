import React from 'react';

export default class FriendsInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            email: '',
        };
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleAddFriend = e => {
        e.preventDefault();
        if (!this.state.name || !this.state.age || !this.state.email) 
            return alert('Please fill out all fields');
        const [name, age, email] = [this.state.name, Number(this.state.age), this.state.email];
        this.props.addFriend({name, age, email});
        this.setState({ name: '', age: '', email: '' });
        
    }
    render(){
        return (
            <form onSubmit={this.handleAddFriend}>
                <input 
                    type="text" 
                    placeholder="Name" 
                    onChange={this.handleChange}
                    name="name"
                    value={this.state.name}
                />
                <input 
                    type="number"
                    placeholder="Age"
                    onChange={this.handleChange}
                    name="age"
                    value={this.state.age}
                />
                <input 
                    type="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={this.state.email}
                />
                <button type="submit">Add Friend</button>
            </form>
        );
    }
}