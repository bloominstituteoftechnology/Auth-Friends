
import React from 'react';
import {connect} from 'react-redux';

import {createFriend} from '../actions/index';

class NewFriendForm extends React.Component{
    constructor(){
        super()
        this.state = {
            name : '',
            age : '',
            email : '',
        }
    }

    inputHandler = e =>{
        this.setState({[e.target.value] : e.target.name})
    }
    submitHandler = e =>{
        e.preventDefault()
        this.props.createFriend({...this.state}) ///Is this the correct way?
        this.setState({
            name : '',
            age : '',
            email : '',
        })
    }
    render(){
        return(
            <div className = 'new-friend-form-container'>
                <form >
                    <input 
                        placeholder = '    add name ...'
                        type = 'text'
                        name = 'name'
                        value = {this.state.name}
                        onChange = {this.inputHandler}

                    />
                     <input 
                        placeholder = '    add age ...'
                        type = 'text'
                        name = 'age'
                        value = {this.state.age}
                        onChange = {this.inputHandler}

                    />
                     <input 
                        placeholder = '    add email ...'
                        type = 'text'
                        name = 'email'
                        value = {this.state.email}
                        onChange = {this.inputHandler}

                    />
                    <button onClick = {this.submitHandler} type = 'submit' >Add new friend</button>
                    
                </form>
            </div>
        )
    }
}

const mapStateToProps = () =>{
    return{}
}

export default connect(mapStateToProps, {createFriend})(NewFriendForm)