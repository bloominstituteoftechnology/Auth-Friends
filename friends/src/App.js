import React, { Component } from 'react';
import './App.css';

import { fetchFriends, addFriend } from './actions'
import { connect } from "react-redux";
import Friends from './Components/Friends';
import CreateFriendForm from './Components/CreateFriendForm'


class App extends Component {

  componentDidMount() {
    // call our action
    this.props.fetchFriends();
  }

  onChange = (event) => {
    this.setState({ [event.target.name] : event.target.value})
  }

  onFormSubmit = event => {
    event.preventDefault();
      const { name, age, email } = this.state
      if(name !== '' && age !== '' && email !== '') {
          this.props.addFriend(event, { name, age, email })
      } else {
            alert ('Need correct data')
    }
  }

  render() {
    console.log("#########  :  " ,this.props.friends,);
    return (
      <div className="App">
          <h1>Friends...</h1>

          <Friends 
              friends = {this.props.friends} 
          />

          <CreateFriendForm 
              onChange = {this.onChange}
              onFormSubmit = {this.onFormSubmit}
          />
      </div>
    );
  }
}

const mapStateToProps = state => {
    console.log("state   : " ,state)
    return {
        friends : state.friendFetchReducer.friends,
        isFetching : state.friendFetchReducer.isFetching,
        error : state.friendFetchReducer.error
    }
}

export default connect(mapStateToProps, { fetchFriends, addFriend }) (App);
