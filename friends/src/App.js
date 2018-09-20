import React, { Component } from 'react';
import './App.css';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';
import Friend from './components/Friend';
import {Route} from 'react-router-dom';
import './App.css';
import {saveFriends,fetchFriends,updateFriend,deleteFriend} from './actions/action.js';

import { connect } from 'react-redux';

class App extends Component {
  constructor(){
    super();
    this.state={
      inputFriend:{
        id: "",
        name: "",
        age: "",
        email: ""
      }
    }
  }

  componentDidMount(){
    this.props.fetchFriends();
  }

  handleSaveFriend = event => {
    event.preventDefault();
    console.log(this.props.friends);
    this.props.saveFriends({id: this.props.friends.length, //new friend ID
                          name: this.state.inputFriend.name,
                          age: this.state.inputFriend.age,
                          email: this.state.inputFriend.email});
    this.setState({ 
      friend:{  id:"",
                name:"",
                age: "",
                email:""} 
    });
  }

  handleDeleteFrien = event => {
    event.preventDefault();
    this.props.deleteFriends();
  }

  handleUpdateFriend = event => {
    this.props.updateFriends();
  }

  handleInputChange = event => {
    this.setState({friend: { ...this.state.inputFriend,
                            [event.target.name]: event.target.value}
                  })
  }

  render() {
    return (<div>
              {/* {console.log(this.props)} */}
              
              <Route  exact
                      path="/"
                      render={props =>  
                              <FriendList {...props}        
                                          friends={this.props.friends}
                                          handleDeleteFriend={this.handleDeleteFriend}
                                          handleUpdateFriend={this.handleUpdateFriend}/>}/>
              <Route  path="/form"
                      render={props =>
                              <FriendForm {...props} 
                                          friend={this.state.inputFriend}
                                          friends={this.props.friends}
                                          handleInputChange={this.handleInputChange}
                                          handleSaveFriend={this.handleSaveFriend}/> }/>
              <Route  path="/:id"
                      render={
                              props =>(
                              <Friend {...props}
                                      friend={this.state.inputFriend}
                                      friends={this.props.friends}
                                      handleDeleteFriend={this.handleDeleteFriend}
                                      handleUpdateFriend={this.handleUpdateFriend}/>)}/>
              
                
            </div>
          )
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //         <h1>Friend List</h1>
    //     </header>
        
    //   </div>
    // );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    friends: state.friendReducer.friends, 
    fetchingFriend: state.friendReducer.fetchingFriend,
    friendsFetched: state.friendReducer.friendsFetched,
    friendsSaved: state.friendReducer.friendsSaved,
    savingFriends: state.friendReducer.savingFriends,
    updatingFriend: state.friendReducer.updatingFriend,
    friendUpdated: state.friendReducer.friendUpdated,
    deletingFriend: state.friendReducer.deletingFriend,
    friendDeleted: state.friendReducer.friendDeleted,
  };
};

export default connect(mapStateToProps, {
  saveFriends,
  fetchFriends,
  updateFriend,
  deleteFriend
})(App);

//   handleAddFriend = event => {
//     event.preventDefault();
//     if (this.state.friend.name && this.state.friend.age && this.state.friend.email){
//       if (!this.state.isUpdate){
//           axios.post('http://localhost:5000/friends', 
//                     { name: this.state.friend.name,
//                       age: this.state.friend.age,
//                       email: this.state.friend.email })
//                 .then(response => {
//                       this.setState({ friends: [...response.data],
//                                       friend:{  id:"",
//                                                 name:"",
//                                                 age: "",
//                                                 email:""} 
//                                     });
//                     })
//                 .catch(err => console.log(err));
//       } else{
//           axios.put(`http://localhost:5000/friends/${this.state.friend.id}`, 
//                   { name: this.state.friend.name,
//                     age: this.state.friend.age,
//                     email: this.state.friend.email })
//               .then(response => {
//                     this.setState({ friends: [...response.data],
//                                     friend:{  id:"",
//                                               name:"",
//                                               age: "",
//                                               email:""},
//                                     isUpdate:false 
//                                   });
//                   })
//               .catch(err => console.log(err));
//       }
//     }
//   }

//   handleUpdateFriend=(event,friendId)=>{
//     event.preventDefault();
//     this.setState({friend: this.state.friends[friendId-1],
//                   isUpdate: true});
//     console.log(this.state);
//   }

//   handleDeleteFriend=(event, friendBeingDeleted)=>{
//     event.preventDefault();
//     axios.delete(`http://localhost:5000/friends/${friendBeingDeleted.id}`, friendBeingDeleted)
//               .then(response => {
//                      this.setState({ friends: [...response.data]
//                                   });
//                   })
//               .catch(err => console.log(err));
//   }

//   componentDidMount(){
//     // console.log(this.props.history);
//     axios
//     .get('http://localhost:5000/friends')
//       .then(response => {
//         this.setState({ friends: response.data });
//       })
//       .catch(err => console.log(err));
//   }

//   render() {
//     return (
//       <div>
//           {/* <Route  path="/:id"
//                   render={props =>
//                           <Friend {...props}
//                                   friends={this.state.friends}
//                                   handleDeleteFriend={this.handleDeleteFriend}
//                                   handleUpdateFriend={this.handleUpdateFriend}/>}/> */}
//           <Route  exact
//                   path="/"
//                   render={props =>  
//                           <FriendList {...props}        
//                                       friends={this.state.friends}
//                                       handleDeleteFriend={this.handleDeleteFriend}
//                   handleUpdateFriend={this.handleUpdateFriend}/>}/>
          
//           <Route  path="/form"
//                   render={props =>
//                           <FriendForm {...props} 
//                                       friend={this.state.friend}
//                                       handleChange={this.handleChange}
//                                       handleAddFriend={this.handleAddFriend}/> }/>
          
//       </div>
//     )
//   }
// }

// export default App;

