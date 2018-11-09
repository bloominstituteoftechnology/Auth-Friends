import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewFriendForm from './Components/NewFriendForm'
import ContactPage from './Components/ContactPage'

class App extends Component {

  constructor () {
    super();

    this.state = {
      friends: [{"id":1,"name":"Ben","age":30,"email":"ben@lambdaschool.com"},{"id":2,"name":"Austen","age":45,"email":"austen@lambdaschool.com"},{"id":3,"name":"Ryan","age":15,"email":"ryan@lambdaschool.com"},{"id":4,"name":"Sean","age":35,"email":"sean@lambdaschool.com"},{"id":5,"name":"Michelle","age":67,"email":"michelle@gmail.com"}],
      name: '',
      age: '',
      email: '',
    }
  }
  render() {
    return (
      <div className="App">
        <NewFriendForm />
        <ContactPage friends = {this.state.friends} />
        
      </div>
    );
  }
}

export default App;
