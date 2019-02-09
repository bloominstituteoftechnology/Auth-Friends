import React from 'react';
import { connect } from 'react-redux';
import { editForm, editFriend } from '../actions';

class EditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            friend: {
                id: this.props.friend.id,
                name: this.props.friend.name, 
                age: this.props.friend.age, 
                email: this.props.friend.email 
            }
        }
    }

    editFriendHandler = e => {
        e.preventDefault();
        console.log(this.props);
        this.props.editFriend(this.state.friend.id, this.state.friend);
        this.setState({
            friend: {
                name: '',
                age: '',
                email: ''
            }
        })
        console.log(this.state)
    }


    changeHandler = e => {
        // e.preventDefault();
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
            <div>

                {/* {} */}
                <form className="editForm" onSubmit={this.editFriendHandler}>
                    <input  
                        onChange={this.changeHandler}
                        type="text"
                        name="name"
                        value={this.state.friend.name}
                        placeholder="name"
                    />
                    <br></br>
                    <input
                        onChange={this.changeHandler}
                        type="text"
                        name="age"
                        value={this.state.friend.age}
                        placeholder="age"
                    />
                    <br></br>
                    <input
                        onChange={this.changeHandler}
                        type="email"
                        name="email"
                        value={this.state.friend.email}
                        placeholder="email"
                    />
                    <br></br>
                    <button type="submit">Edit</button>
                    {/* { this.addFriendHandler ? 
                        <div>{this.props.savingFriends}</div>
                    } */}
                </form>
            </div>
        )
    }
}

const mstp = ({ friendsReducer: state }) => {
    return  {
        editId: state.editId,
        friend: {
            id: state.friend.id,
            name: state.friend.name,
            age: state.friend.age,
            email: state.friend.email
        }
    }
}

export default connect(mstp, 
    {editForm,
    editFriend}
    ,)
    (EditForm);