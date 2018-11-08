import React from 'react';
import {connect} from 'react-redux';

import {updateFriend} from '../actions/actions';

class UpdateFriend extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.friend.name,
            age: this.props.friend.age.toString(),
            email: this.props.friend.email
        }
    }

    handleInput = (event)=>{
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        this.props.updateFriend(Object.assign({}, this.state, {id: this.props.friend.id, age: Number(this.state.age)}))
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleInput}/>
                    <input type="number" name="age" value={this.state.age} onChange={this.handleInput}/>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleInput}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {}
}

export default connect(mapStateToProps, {updateFriend})(UpdateFriend);