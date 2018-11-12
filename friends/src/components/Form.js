import React, { Component } from 'react';
import {addFriends} from '../actions/action';
import {connect} from 'react-redux';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name: '',
            email:'',
            age:''
        }
    }

    inputHandler = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitHandler = event => {
        event.preventDefault();
        this.props.addFriends(this.state);
        this.setState({
            name:'',
            email:'',
            age:''
        })
    }

    render() {
        return (
            <div className="form">
                <form onSubmit = {this.submitHandler}>
                    <input type="text" name="name"
                           value={this.state.name}
                           placeholder="Name"
                           onChange={this.inputHandler} />
                    <input type="text" name="email"
                           value={this.state.email}
                           placeholder="Email"
                           onChange={this.inputHandler} />  
                    <input type="text" name="age"
                           value={this.state.age}
                           placeholder="Age"
                           onChange={this.inputHandler} /> 
                    <input type="submit" value="Add" />           
                </form>   
            </div>
        );
    }
}

// export default Form;

const mapStateToProps = state => {
    return { }
}
export default connect(mapStateToProps, {addFriends})(Form);