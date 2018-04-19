import React, { Component } from 'react';
import { connect } from 'react-redux';
import {post_Friend} from '../Actions';




class CreateFriend extends Component {
    render() {
        return (
            <div>
            <h3>Add a new friend</h3>
            <input type="text" placeholder="Name" name="name"/>
            <input type="text" placeholder="Age" name="age"/>
            <input type="text" placeholder="Email" name="email"/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
  }

export default connect(mapStateToProps, {
    /* actions go here */
    post_Friend
  })(CreateFriend);