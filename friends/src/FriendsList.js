import React, { Component } from 'react';
import styled from 'styled-components';
import FriendForm from './FriendForm';
import {Route, Link} from 'react-router-dom';

const FriendDiv = styled.div`
position: relative;
width: 160px;
display: flex;
justify-content: center;
align-items:center;
text-align: center;
background-color: #282828;
color: white;
list-style: none;
flex-direction: column;
overflow-y: auto;
height: 100%;
align-items: flex-start;
`
const PageContainer = styled.div`
max-width: 1000px;
display:flex;
justify-content: flex-start;
align-items: center;
`
const Wrapper = styled.div`
height: 90vh;
margin: 0 auto;
`
const MessageBox = styled.div`
position:absolute;
top:120px;
left: 170px;
width: 288px;
height: 78vh;
border: 1px solid #363636;
background-color:  #282828;
`
const Info = styled.p`
margin: 10px;
color: #464646;
font-size: 30px;
`


class FriendsList extends Component {
  constructor(props){
    super(props);

  }
  render() { 
    return ( 
     <div>
      <FriendDiv>
      <Wrapper>
        {this.props.friends.map(friend => <Link to={`/chat/${friend[1].id}`}><div key={Math.random()} style={{display: 'flex', flexDirection:'column'}}>
       <div> <img src ={friend[1].profile_pic} style={{paddingTop:'15px', borderRadius: '50%'}}/></div><div>{friend[1].first_name}</div>
        </div></Link>)}</Wrapper>
      </FriendDiv>
        <FriendForm onChange={this.props.onChange} nameValue={this.props.nameValue} emailValue={this.props.emailValue} formSubmit={this.props.formSubmit}/>
      
      <Route friends={this.props.friends} path ={`/chat/:id`} render={({match}) =>{return (
          <MessageBox friendID={match.params.id} {...this.props}></MessageBox>
          
          
      )}} />
        

  </div>
      
     )
  }
}
 
export default FriendsList;
// { this.props.friends[{ this.props.friendID }]['1'].first_name }
//working on displaying data from the dynamic chat people