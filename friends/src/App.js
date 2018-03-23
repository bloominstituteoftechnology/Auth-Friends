import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getFriends, addFriend } from './actions';

class App extends Component {
  state = {
    name: '',
    age: '',
    email: '',
}
componentDidMount() {
  this.props.getFriends();
}

handleInputChange = (event) => {
  const { name, value } = event.target;
  this.setState({ [name]: value });
};
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <ul> 
            {this.props.friends.map(friend => {
              return (
                <div key={friend.id}>
                  <li>
                    {friend.name}
                  </li>
                  <li>
                    {friend.age}
                  </li>
                  <li>
                    {friend.email}
                  </li>
                </div>)
            } )}
          </ul>
          <form>
              <input onChange={this.handleInputChange} type="text" name="name" value={this.state.name}></input>
              <input onChange={this.handleInputChange} type="number" name="age" value={this.state.age}></input>
              <input onChange={this.handleInputChange} type="text" name="email" value={this.state.email}></input>
              <button onChange={this.handleInputChange} type="submit"
              onClick={(event) => {
                event.preventDefault()
                this.props.addFriend(this.state)
                this.setState({name: "", age: "", email: ""})
              }}>Add Friend</button> 
          </form>
        </div>
      </React.Fragment>
    );
  }
}

// the way the teacher did it 
// componentDidMount() {
//   render() {
//     return <Friends friends={this.props.friends}/>
//   }
// }

const mapStateToProps = (state) => {
  return {
    friends: state.friends, 
    fetching: state.fetching,
    error: state.error
  }
}

export default connect(mapStateToProps, {getFriends, addFriend})(App);
