import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {addFriend} from '../actions/actions';

const AddFriendContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    form{
        display: flex;
        justify-content: center;
        align-item: center;
        flex-wrap: wrap;

        input{
            margin: 10px 5px;
            width: 25%;
            height: 20px;
            border-radius: 5px;
        }

        button{
            margin: 10px 10px;
            width: 10%
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
        if(this.state.name === ''){
            return;
        }

        this.props.addFriend(Object.assign({}, this.state, {age: Number(this.state.age)}));
        this.setState({
            name: '',
            age: '',
            email: ''
        });
    }

    render(){
        return(
            <AddFriendContainer>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleInput} placeholder="Enter name..."/>
                    <input type="number" name="age" value={this.state.age} onChange={this.handleInput} placeholder="Enter age..."/>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleInput} placeholder="Enter email..."/>
                    <button type="submit">Submit</button>
                </form>
            </AddFriendContainer>
        )
    }
}

const mapStateToProps = state=>{
    return {}
}

export default connect(mapStateToProps, {addFriend})(AddFriend);