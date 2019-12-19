import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

class Friends extends React.Component{
  state = {
    addFriend: {
      name: '',
      age: '',
      email: ''
    },
    friendsList: []
  };

  handleChange = e => {
    this.setState ({
      addFriend: {
        ...this.state.addFriend,
        [e.target.name] : e.target.value
      }
    });
  };
  createFriend = e => {
    axiosWithAuth()
      .post('./friends', this.state.addFriend)
      .then(res => {
        this.props.history.push('/friends');
      })
      .catch(err => console.log (err));
    };
    
    componentDidMount () {
      axiosWithAuth()
      .get('/friends')
      .then(res => {
        console.log(res);
        this.setState({friendsList: res.data});
      });
    }

  render(){
    return(
      <div>
        <form onSubmit = {this.createFriend}>
          <input
              type= 'text'
              name = 'name'
              placeholder = 'name'
              value = {this.state.addFriend.name}
              onChange = {this.handleChange}
          />

<input
              type= 'text'
              name = 'email'
              placeholder = 'Email'
              value = {this.state.addFriend.email}
              onChange = {this.handleChange}
          />

<input
              type= 'text'
              name = 'age'
              placeholder = 'Age'
              value = {this.state.addFriend.age}
              onChange = {this.handleChange}
          />

          <button type ='submit'> Add </button>
        </form>
      {this.state.friendsList.map(friends => {
        return(
          <div key = {friends.id}>
            <p>{friends.name}</p>
            <p> {friends.email}</p>
            <p> {friends.age}</p>
          </div>
        )
      })}
      </div>
    );
  }
}
export default Friends;