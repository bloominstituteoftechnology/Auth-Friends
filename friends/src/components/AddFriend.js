import React, { Component } from "react";
import { friendsReducer } from "../reducers/friendsReducer";
import { EPROTONOSUPPORT } from "constants";

import { connect } from "react-redux";
import { addFriend } from "../actions";

class AddFriend extends Component {
    constructor() {
        super()
        this.state = {
            friend: {}
        }
    }

    handleInput = e => {
        let newFriend = this.state.friend;
        newFriend[e.target.name] = e.target.value;
        this.setState({newFriend});
    }
    
    render() {
        return(
            <div>
                <form>
                    <input onChange={this.handleInput} placeholder="name" value={this.state.name} name="name"/>
                    <input onChange={this.handleInput} placeholder="age" value={this.state.age} name="age"/>
                    <input onChange={this.handleInput} placeholder="email" value={this.state.email} name="email"/>
                    <button type="submit" onSubmit={() => this.props.addFriend(this.state.friend)}>Add a friend</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { friendsReducer } = state
    return friendsReducer
}

export default connect(mapStateToProps, { addFriend })(AddFriend);