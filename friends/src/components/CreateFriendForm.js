import React, {Component} from 'react';



export default class CreateFriendForm extends Component {
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

    
    render () {
        return (
            <form>
                <input onChange={ this.handleFriendName } placeholder='name' name='name' value={this.state.name}/>
                <input onChange={this.handleFriendName } placeholder='age' name='age' value={this.state.age}/>
                <input onChange={this.handleFriendName } placeholder='email' name='email' value={this.state.email}/>
            </form>
        )
    }
}