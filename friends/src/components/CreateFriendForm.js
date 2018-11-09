import React from 'react';
import { connect } from 'react-redux';
import {saveFriend} from '../actions/actions';

class CreateFriendForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    };

    inputHandler = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.saveFriend(this.state);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <input name="name" placeholder="name" value={this.state.name} onChange={this.inputHandler} />
                    <input name="age" placeholder="age" value={this.state.age} onChange={this.inputHandler}/>
                    <input name="email" placeholder="email" value={this.state.email} onChange={this.inputHandler}/>
                    <input type="submit" value="Create"/>
                </form>
            </div>
        )
    }
};

export default connect(() => ({}), { saveFriend })(CreateFriendForm);