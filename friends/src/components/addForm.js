import React from 'react';

class AddForm extends React.Component {

    state = {
        friendName: '',
        friendAge: '',
        friendEmail: ''
    }
    handleChange = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }

    addFriend = (ev) => {
        ev.preventDefault();
        let friend = {
            name: this.state.friendName,
            age: this.state.friendAge,
            email: this.state.friendEmail
        }
        this.props.addFriend(friend);
        this.setState({
            friendName: '',
            friendAge: '',
            friendEmail: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.addFriend}>
                <input name="friendName" 
                    placeholder='name'
                    value={this.state.friendName}
                    onChange={this.handleChange}/>
                <input name="friendAge" 
                    placeholder='age' 
                    value={this.state.friendAge}
                    onChange={this.handleChange}/>
                <input name="friendEmail"
                    placeholder='email'
                    value={this.state.friendEmail}
                    onChange={this.handleChange} />
                <button type='submit'>Add Friend</button>
            </form>
        );
    }
}

export default AddForm;