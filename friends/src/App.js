import React, { Component } from 'react';
import './App.css';
import {add} from './actions';
import {connect} from 'react-redux';
import FriendsList from './components/FriendsList';
import axios from 'axios';

class App extends Component {
  componentDidMount(){
    axios.get('http://localhost:5000/api/friends').then( res=>{
      res.data.forEach( (e,i)=>{
        let name = e.name;
        let age = e.age;
        let email = e.email;
        let id = e.id;
        this.props.add(name,age,email,id);
      });
    }).catch( (err)=>{
      console.log(err);
    });
  }

  render() {
    return (
    <div>
      <h1>list of friends</h1>
      <FriendsList friends={this.props.info.friends} />
    </div>
    );
  }

}

const mapStateToProps = (state) =>{
  return {
    info:state
  }
}


export default connect(mapStateToProps,{add})(App);
