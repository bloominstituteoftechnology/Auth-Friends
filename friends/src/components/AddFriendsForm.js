import React from "react";
import { connect } from 'react-redux';
import { addFriends} from '../Actions';

class AddFriendsForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            friend: {
                name: "",
                email: "",
                age: 5
            }
        }
    }

    addFriend = event => {
        event.preventDefault();
        console.log(this.state.friend)
        this.props.addFriends(this.state.friend)
        this.setState({
            friend: {
                name: "",
                email: "",
                age: 5
            }
        });
    };

    inputHandler = event => {
        this.setState({ friend: {...this.state.friend, [event.target.name]: event.target.value}});
    }

    render(){
        return(
            <div>
                <form onSubmit={this.addFriend}>
                    <input
                    onChange={this.inputHandler}
                    placeholder="name"
                    value={this.state.name}
                    name="name"/>
                    <input
                    onChange={this.inputHandler}
                    placeholder="email"
                    value={this.state.email}
                    name="email"/>
                    <button type="submit">Add Friend</button>
                </form>
            </div>
        );
    }
}

export default connect(null, { addFriends })(AddFriendsForm);