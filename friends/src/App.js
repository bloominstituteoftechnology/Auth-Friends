import React, { Component } from 'react';
import './App.css';
import { fetch,add, deleteFriend } from './actions'

import { connect } from 'react-redux';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'', 
      age:'',
      email: ''
    }
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  submitHandler = event =>{
    event.preventDefault();
    this.props.add({name: this.state.name, age: this.state.age, email: this.state.email});
    this.setState({
      name:'',
      age: '',
      email: '',
    })
  }
  componentDidMount(){
    this.props.fetch()
  }

  render() {
    return (
      <div className="App">
        {this.props.friends.map((item,index)=>{
          return <div className = 'friend-div' key = {index}>
            <p>{item.name}</p>
            <button onClick ={()=>{this.props.deleteFriend(item.id)}}>X</button>
            </div>
        })}
        <form className = 'form' onSubmit = {this.submitHandler}>
          <input name = 'name' onChange = {this.handleChange} value = {this.state.name} placeholder = 'name' />
          <input name = 'age' onChange = {this.handleChange} value = {this.state.age} placeholder = 'age' />
          <input name = 'email' onChange = {this.handleChange} value = {this.state.email} placeholder = 'email' />
          <button>Add New Friend</button>
        </form>
      </div>
    );
  }
}
const mapStatetoProps = state =>{
  return{
    fetchingFriends: state.friendReducer.fetchingFriends,
    friendsFetched: state.friendReducer.friendsFetched,
    friendsSaved: state.friendReducer.friendReducer,
    savingFriends: state.friendReducer.savingFriends,
    updatingFriend: state.friendReducer.updatingFriend,
    friendUpdated: state.friendReducer.friendUpdated,
    deletingFriend: state.friendReducer.deletingFriend,
    friendDeleted: state.friendReducer.friendDeleted,
    friends: state.friendReducer.friends,
    error: state.friendReducer.error
  }
}

export default connect(mapStatetoProps,{
  fetch,
  add,
  deleteFriend
})(App)

