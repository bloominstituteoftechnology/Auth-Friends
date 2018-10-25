import React from 'react';
 import { connect } from 'react-redux';
 import { addNewFriend } from '../actions';
 class CreateFriendForm extends React.Component {
    state = {
           name: '',
           age: '',
           email: ''
    };
     handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
     handleAddNewFriend = (event) => {
         event.preventDefault();
         
        const friend = this.state;
        console.log('addnewfriend', friend);
        this.props.addNewFriend(friend);
        this.setState({ name: '', age: '', email: '' });
     }

    // handleAddNewFriend = (newFriend) => {
    //     this.setState({friends: newFriend});
    // }
     render() {
        return (
        <div>
            <form onSubmit={this.handleAddNewFriend}>
                <input name="name" value={this.state.name} type="text" onChange={this.handleInputChange} placeholder="Name" />
                <input name="age" value={this.state.age} type="number" onChange={this.handleInputChange} placeholder="Age" />
                <input name="email" value={this.state.email} type="email" onChange={this.handleInputChange} placeholder="Email" />
                    <button type='submit'>Add Friend</button>
            </form>
        </div>
        );
    }
}
 const mapStateToProps = state => ({
  friends: state.friends
});
 export default connect(mapStateToProps, { addNewFriend })(CreateFriendForm);