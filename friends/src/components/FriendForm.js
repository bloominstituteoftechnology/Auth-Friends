import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';
import { FaPlus} from 'react-icons/fa';
import { Button, FormControl } from 'react-bootstrap';

class FriendForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            friend: {
                name: '',
                age: '',
                email: ''
            }
        }
    }
    addFriendHandler = e => {
        e.preventDefault();
        this.props.addFriend(this.state.friend);
        this.setState({
            friend: {
                name: '',
                age: '',
                email: ''
            }
        })
    }


    changeHandler = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value,
                [e.target.age]: e.target.value,
                [e.target.email]: e.target.value
            }
        })
    }
    render() {
        return(
            <form className="addForm" onSubmit={this.addFriendHandler}>
                <h1>Add a Friend</h1>
                <FormControl  
                    onChange={this.changeHandler}
                    type="text"
                    name="name"
                    value={this.state.friend.name}
                    placeholder="name"
                />
                <br></br>
                <FormControl
                    onChange={this.changeHandler}
                    type="text"
                    name="age"
                    value={this.state.friend.age}
                    placeholder="age"
                />
                <br></br>
                <FormControl
                    onChange={this.changeHandler}
                    type="email"
                    name="email"
                    value={this.state.friend.email}
                    placeholder="email"
                />
                <br></br>
                <Button variant="success" type="submit">Add <FaPlus /></Button>
            </form>
        )
    }
}

export default connect(null, {addFriend})(FriendForm);