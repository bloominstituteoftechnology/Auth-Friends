import React from 'react';
import styled from 'styled-components';

const Containing = styled.div`
    border: 2px solid black; 
    width: 600px; 
    margin: 0 auto;

`;

const Friend = styled.div`
    border: 1px solid blue;
    margin-top : 25px; 
    margin-bottom: 25px;
    font-weight: bold;
    word-spacing: 10px;
    i {
        color: red;
    }
    i:hover {
        cursor: pointer; 
    }
    
`


class FriendsContainer extends React.Component {


    render () {
        return (
            <Containing>
                <div style = {{textAlign: 'center', fontWeight: 'bold'}}>Friends List</div>
                {this.props.friends.map(friend => <Friend onClick = {() => this.props.onClick(friend.id, friend.name, friend.age, friend.email)}key = {friend.id} >{friend.name}     <span>{friend.age  }     </span>
                <span>{friend.email}     </span><i className="fas fa-backspace" onClick = {() => this.props.delete(friend.id, friend.name, friend.email)}></i></Friend> )}
            </Containing>
        )
    }
}


export default FriendsContainer; 