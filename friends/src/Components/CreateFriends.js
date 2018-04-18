import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../Actions/Index.js';

class CreateFriend extends React.Component {
    state = {
        Inputs: {
            name: '',
            age: '',
            email: '',
        }
    }
    handleInputChange = (event) => {
        const { name, value } = event.target;
        const inputs = this.state.Inputs;
        inputs[name] = value;
        this.setState({ Inputs: inputs })
    }
    handleSubmit = (event) => {
        event.preventDefautl();    
        this.props.addFriend(this.state.Inputs);
        this.setState({
            Inputs: {
                name: '',
                age: '',
                email: '',
            }
        })
    }

    render() {
        return (
            <div className="Friends">
            <form onSubmit={this.handleSubmit}>
            <p>
                <p> New Friend</p>
                <input onChange={this.handelInputChange} value={this.state.Inputs.name} type="text" name="name" placeholder="Enter Name"/>
                <input onChange={this.handelInputChange} value={this.state.Inputs.age} type="text" age="age" placeholder="Enter Age"/>
                <input onChange={this.handelInputChange} value={this.state.Inputs.email} type="text" email="email" placeholder="Enter Email"/>
            <button> Add Friend </button>
            </p>
            </form>
            </div>
        )
    }
}