import React from 'react';
import { newFriend } from '../actions';
import { connect } from 'react-redux';

class CreateFriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    handleInput = event => {
        event.preventDefault();

        if(event.target.name === 'age') {
            this.setState({
            age: Number(event.target.value)
            })} 
        else if (event.target.name === 'name'){
            this.setState({
                name: event.target.value
        })} else {
                this.setState({
                    email: event.target.value
        })}
    }

    addFriend = (event) => {
        event.preventDefault();
        console.log('addFriend event', event)
        this.props.newFriend(this.state);
    }

    render() {
        return (
            <div>
                <h3>Add a Friend</h3>
                <form action="">
                    <input type="text" name="name" placeholder="name" onChange={this.handleInput}/>
                    <input type="text" name="age" placeholder="age" onChange={this.handleInput}/>
                    <input type="text" name="email" placeholder="email" onChange={this.handleInput}/>
                    <input type="submit" onClick={this.addFriend}/>
                </form>
            </div>
        )
    }

}

export default connect(null, {newFriend})(CreateFriendForm); 