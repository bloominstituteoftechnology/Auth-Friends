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
            <div className="addForm">
                <div>
                    <h2>Add a new friend</h2>
                    <input className="input" type="text" onChange={this.handleInputChange} placeholder="Name" name="name"/>
                    <input className="input" type="text" onChange={this.handleInputChange} placeholder="Age" name="age"/>
                    <input className="input" type="text" onChange={this.handleInputChange} placeholder="Email" name="email"/>
                </div>
                <button className="button-Add" onClick={() =>
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