import React, { Component } from "react";
import styled from 'styled-components';

const FriendCard = styled.div `
  background: #FEE800A6;
  width: 300px;
  padding: 10px;
  border-radius:5px;
  margin: 15px;
  box-sizing: border-box;
  box-shadow: 1px 1px 15px lightblue, -1px -1px 15px lightblue;
  text-align: center;
  h4{
    
    margin:5px 0;
  }
`
class Friend extends Component {
  render() {
    return <FriendCard><h4>{this.props.friend.name}</h4>
    <p>age: {this.props.friend.age}</p>
    <p>email: {this.props.friend.email}</p>
    
    </FriendCard>;
  }
}
export default Friend;
