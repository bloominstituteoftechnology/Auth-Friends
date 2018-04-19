import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { friendFetch, friendCreate } from './actions';
import { connect } from 'react-redux';


class App extends Component {
  constructor(props) {
    super(props);
  
 this.state = {
    newName: '',
    newAge: '',
    newEmail: ''
  }
}
  componentDidMount() {
this.props.friendFetch();
  }

  addFriend = () => {
    const newBro = {
      name: this.state.newName,
      age: this.state.newAge,
      email: this.state.newEmail
    }
    this.props.friendCreate(newBro);
    this.setState({newName: '', newAge: '', newEmail: ''});
  }
  render() {
   
    return (
      <div className="App">
          <input 
          type='text'
          placeholder="name"
          name="newName"
          value={this.state.newName}
          onChange={e => this.setState({ [e.target.name]: e.target.value})}
/>
<input 
          type='text'
          placeholder="email"
          name="newEmail"
          value={this.state.newEmail}
          onChange={e => this.setState({ [e.target.name]: e.target.value})}
/>
<input 
          type='number'
          placeholder="age"
          name="newAge"
          value={this.state.newAge}
          onChange={e => this.setState({ [e.target.name]: e.target.value})}
/>

<button
onClick={this.addFriend} >CLICKME BOI</button>
        {this.props.friends.map((friend, index) => {
          return <ul className="makeRoom" key={friend+index}>{friend.name}<br />
          {friend.email} < br /> {friend.age} </ul>;
        })}
    
      </div>
    );
  }
  
}
const mapStateToProps = state => {
  return {
    fetchingFriends: state.fetchingFriends,
    friends: state.friends
  }
}

export default connect(mapStateToProps, { friendFetch, friendCreate })(App);
