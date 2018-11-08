import React from 'react';
import {connect} from 'react-redux';

import {addFriend} from '../actions/actions';

class AddFriend extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    handleInput = (event)=>{
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        this.props.addFriend(Object.assign({}, this.state, {age: Number(this.state.age)}));
        this.setState({
            name: '',
            age: '',
            email: ''
        });
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleInput} placeholder="Enter name..."/>
                    <input type="number" name="age" value={this.state.age} onChange={this.handleInput} placeholder="Enter age..."/>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleInput} placeholder="Enter email..."/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state=>{
    return {}
}

export default connect(mapStateToProps, {addFriend})(AddFriend);