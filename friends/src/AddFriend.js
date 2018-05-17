import React , {Component} from 'react';
import { connect } from 'react-redux';
import { createFriend} from './actions'

class AddFriend extends Component {
    state = {
        name: '',
        age: '',
        email: ''
    }

    handleFriendInput = e => {
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.age]: e.target.value,
            [e.target.email]: e.target.value
        });
  };

        
    render () {
        return (
            <div>
                <form>
                    <input onChange={this.handleFriendInput} value={this.props.name} name= 'name' placeholder="Name" />
                    <input onChange={this.handleFriendInput} value={this.props.age} name= 'age' placeholder="Age" />
                    <input onChange={this.handleFriendInput} value={this.props.email} name= 'email' placeholder="Email" />
                    <button onClick={(e) => {
                        createFriend(this.state)
                        }
                    }
                        > Add Friend</button>
                </form>
        </div>
        )
    }
}   

export default connect(null, { createFriend})(AddFriend);