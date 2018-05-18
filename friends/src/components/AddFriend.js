import React, { Component } from "react";
import { connect } from "react-redux";
import { addFriend } from "../actions";

class AddFriend extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    handleInput = e => {
        this.setState({[e.target.name] : e.target.value});
    }
    
    render() {
        return(
            <div>
                <form>
                    <input onChange={this.handleInput} placeholder="name" value={this.state.name} name="name"/>
                    <input onChange={this.handleInput} placeholder="age" value={this.state.age} name="age"/>
                    <input onChange={this.handleInput} placeholder="email" value={this.state.email} name="email"/>
                    <button onClick={() => this.props.addFriend(this.state)}>Add a friend</button>
                </form>
            </div>
        );
    }
}


export default connect(null, { addFriend })(AddFriend);