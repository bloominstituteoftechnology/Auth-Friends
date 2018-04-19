import React, { Component } from 'react';
import { connect } from 'react-redux';
import {post_Friend} from '../Actions';




class CreateFriend extends Component {

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.value)
        return e.target.value;
      };


    render() {
        return (
            <div>
                <div>
                    <h3>Add a new friend</h3>
                    <input type="text" onChange={this.handleInputChange} placeholder="Name" name="name"/>
                    <input type="text" onChange={this.handleInputChange} placeholder="Age" name="age"/>
                    <input type="text" onChange={this.handleInputChange} placeholder="Email" name="email"/>
                </div>
                <button onClick={() =>
                this.props.post_Friend({name: this.state.name, age: this.state.age, email: this.state.email}) }>Add</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('createFriend',state)
    return {
        posting: state.posting,
        friends: state.friends
    }
  }

export default connect(mapStateToProps, {
    /* actions go here */
    post_Friend
  })(CreateFriend);