import React, { Component } from 'react';
import './App.css';
import { fetchFriends } from './actions';
import { connect } from 'react-redux';
import Friend from './components/Friend';
import AddFriend from './components/AddFriend';
import Styled from 'styled-components';

const Header = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #FC804A
  color: #194850;
`;

const Container = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100vw;
`;

class App extends Component {

  componentDidMount() {
    this.props.fetchFriends()
    console.log(this.props.fetchFriends());
    console.log(this.props.friends);
  }

  render() {
    return (
     <div>
       <Header>
        <h1> Friends List</h1>        <AddFriend />
        </Header>
        <Container>
         {this.props.friends.map(friend => {
          return <Friend key={friend.id} friend={friend} />
        })}
       

      </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends.friends
  }
}

const mapActionsToProps = {
  fetchFriends: fetchFriends
}

export default connect( mapStateToProps, mapActionsToProps )(App);
