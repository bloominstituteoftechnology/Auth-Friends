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
    background: #DDDFAB;
    text-align: center;
    box-shadow: 5px 5px;
`;

const Friend = props => {
    return (
        <Friendbox>
           <h2 onClick={() =>props.toggleInfo(props.friend.id)}> {props.friend.name}</h2>
           {props.showInfo === true && 
           (<div><p> {props.friend.age} years old</p><p>{props.friend.email}</p></div>) }
            {props.showForm === true ? <UpdateForm friend={props.friend}/> : null} 
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
