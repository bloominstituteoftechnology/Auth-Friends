import React from 'react';
import { deleteFriend, updateFriend, toggleForm, toggleInfo } from './../actions';
import { connect } from 'react-redux';
import UpdateForm from './UpdateForm';
import Styled from 'styled-components';

const Friendbox = Styled.div`
    border: 1px solid black;
    width: 30%;
    padding: 20px;
    margin: 20px;
    background: #F7EAC7;
    text-align: center;
    box-shadow: 5px 5px #637E74;
`;

const HeadText = Styled.h2`
    color: #194850;
`;

const Info = Styled.div`
    color: #194850;
`;

const Friend = props => {
    return (
        <Friendbox>
           <HeadText onClick={() =>props.toggleInfo(props.friend.id)}> {props.friend.name}</HeadText>
           {props.showInfo === true && 
           (<Info><p> {props.friend.age} years old</p><p>{props.friend.email}</p></Info>) }
           {console.log(props.friend.id)}
            {props.showForm === true ? <UpdateForm id={props.friends[props.friend.id-1].id}/> : null} 
            <button onClick={() => props.toggleForm(props.friend.id)}>Edit</button>
            <button onClick={()=>props.deleteFriend(props.friend.id)}>Delete</button>
        </Friendbox>

    )
}

const mapStateToProps = state => {
    return {
      friends: state.friends.friends,
      showForm: state.friends.showForm,
      showInfo: state.friends.showInfo
    }
  }
  
const mapActionsToProps = {
    deleteFriend: deleteFriend,
    updateFriend: updateFriend,
    toggleForm: toggleForm,
    toggleInfo: toggleInfo
  }

export default connect(mapStateToProps, mapActionsToProps)(Friend);
