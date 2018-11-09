import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import DisplayFriend from './DisplayFriend'
import UpdateFriend from './UpdateFriend';
import {deleteFriend} from '../actions/actions';

const FriendCardContainer = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px 0;
    padding: 15px 30px;
    border: 2px solid black;
    box-shadow: 3px 3px 3px #999999;
`;

const ButtonsContainer = styled.div`
    display: flex;
`;

const Button = styled.div`
    margin: 10px 15px;
    padding: 5px 10px;
    border: 2px solid black;
    border-radius: 8px;
    cursor: pointer;
    color: black;
    background-color: white;

    &:hover{
        color: white;
        background-color: black;
    }
`;

class FriendCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            update: false
        }
    }

    componentDidMount(){
        this.setState({
            update: false
        })
    }

    handleUpdate = (event)=>{
        event.preventDefault();
        this.setState({
            update: true
        })
    }

    handleDelete = (event)=>{
        event.preventDefault();
        this.props.deleteFriend(this.props.friend);
    }

    render(){
        return(
            <FriendCardContainer>
                <DisplayFriend friend={this.props.friend}/>
                {
                    this.state.update ? 
                    <UpdateFriend friend={this.props.friend}/> :
                    <ButtonsContainer>
                        <Button onClick={this.handleUpdate}>Update</Button>
                        <Button onClick={this.handleDelete}>Delete</Button>
                    </ButtonsContainer>
                }
            </FriendCardContainer>
        )
    }

}

const mapStateToProps = (state)=>{
    return {}
}

export default connect(mapStateToProps, {deleteFriend})(FriendCard);