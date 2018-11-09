import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {updateFriend} from '../actions/actions';

const UpdateFriendContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-item: center;
        flex-wrap: wrap;

        input{
            margin: 10px 5px;
            width: 90%;
            height: 20px;
            border-radius: 5px;
        }

        button{
            margin: 10px 10px;
            width: 80%
            height: 26px;
            color: black;
            background-color: white;
            border: 2px solid black;
            border-radius: 5px;
            cursor: pointer;

            &:hover{
                color: white;
                background-color: black;
            }
        }
    }
`;

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
            <UpdateFriendContainer>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleInput}/>
                    <input type="number" name="age" value={this.state.age} onChange={this.handleInput}/>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleInput}/>
                    <button type="submit">Submit</button>
                </form>
            </UpdateFriendContainer>
        )
    }
}

const mapStateToProps = (state)=>{
    return {}
}

export default connect(mapStateToProps, {updateFriend})(UpdateFriend);