import React from 'react';
import { editFriend } from '../actions';
import { connect } from 'react-redux';

class EditForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.friendData.name,
            age: this.props.friendData.age,
            email: this.props.friendData.email,
        }
    }

    handlesChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    editFriend = event => {
        event.preventDefault();
        this.props.editFriend(this.state, this.props.friendId);
    }

    render(){
        return (
            <div className={this.props.willEdit ? 'edit-form' : 'hide'}>
                <form onSubmit={this.editFriend}>
                    <input 
                        type='text'
                        name='name' 
                        value={this.state.name}
                        placeholder={`Friend's name`}
                        onChange={this.handlesChange}
                        required
                    />
                    <input 
                        type='number'
                        name='age' 
                        value={this.state.age}
                        placeholder={`Age`}
                        onChange={this.handlesChange}
                        required
                    />
                    <input 
                        type='email'
                        name='email' 
                        value={this.state.email}
                        placeholder={`E-mail`}
                        onChange={this.handlesChange}
                        required
                    />
                    <button>Edit Friend</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends,
    }
}

export default connect(mapStateToProps, { editFriend })(EditForm);