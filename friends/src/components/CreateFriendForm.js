import React, {Component} from 'react';
import { addFriend } from "../actions";
import { connect } from "react-redux";



class CreateFriendForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        age: '',
        email: '',
      };

    }

    handleFriendName = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    handleAddFriend = () => {
        const newFriend = this.state;
        this.props.addFriend(newFriend);
        this.setState({name:"", age: "", email: ""});
    }


    render () {
        return (
            <form>
                <input onChange={ this.handleFriendName } placeholder='name' name='name' value={this.state.name}/>
                <input onChange={this.handleFriendName } placeholder='age' name='age' value={this.state.age}/>
                <input onChange={this.handleFriendName } placeholder='email' name='email' value={this.state.email}/>
                <button onClick={this.handleAddFriend}>Add Friend</button>
            </form>
        )
    }
}



export default connect(null, { addFriend })(CreateFriendForm);