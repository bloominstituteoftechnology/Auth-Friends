import React, { Component } from 'react';

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

    render() {
        return (
            <div>
                <form>
                    <input type="text" name="name"
                           value={this.state.name}
                           placeholder="Name"
                           onClick={this.props.inputHandler} />
                    <input type="text" name="email"
                           value={this.state.email}
                           placeholder="Email"
                           onClick={this.props.inputHandler} />  
                    <input type="text" name="age"
                           value={this.state.age}
                           placeholder="Age"
                           onClick={this.props.inputHandler} /> 
                    <input type="submit" value="Add" />           
                </form>   
            </div>
        );
    }
}

export default Form;

