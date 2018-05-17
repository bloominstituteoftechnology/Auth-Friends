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

    render () {
        return (
            <form>
                <input placeholder='name' name='name' value={this.state.name}/>
                <input placeholder='age' name='age' value={this.state.age}/>
                <input placeholder='email' name='email' value={this.state.email}/>

            </form>
        )
    }
}