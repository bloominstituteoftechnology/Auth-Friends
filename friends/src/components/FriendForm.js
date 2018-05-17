import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetching_friends} from './actions';

class FriendForm extends Component{
    constructor(){
        super()
        this.state = {
            text: ''
        }
    }

    handleInputChange = (e) => {
        console.log(this.state.text);
        this.setState({ text: e.target.value})
    }

    render(){
        return(
            <div>
                <form >
                    <input onChange={this.handleInputChange}
                        text="text"
                        value={this.state.text}
                    />
                    <button onClick={this.submitTodo} >Add Friend</button>
                </form>
            </div>
        )
    }
}

export default connect(null,{ fetching_friends })(FriendForm)