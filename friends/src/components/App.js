import React, { Component } from 'react';
import logo from '../logo.svg'
import '../styles/App.css'
import { connect } from 'react-redux';
import { fetchFriends } from '../actions'
import { addFriend } from '../actions'
import FriendList from '../components/FriendList'
import Form from 'react-jsonschema-form'

const schema = {
      title: "Add Friend",
      type: "object",
      required: ["name", "age", "email"],
      properties: {
        name: { type: "string", title: "Name", placeholder: "Name" },
        age: { type: "string", title: "Age", placeholder: "Age" },
        email: { type: "string", title: "Email", placeholder: "Email" }
      }
    }

    const log = (type) => console.log.bind(console, type);
    const onSubmit = ({formData}) => this.props.addFriend(formData)

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends()
  }


render() {
  return (
  
  <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>       

        <FriendList />
        <Form schema={schema}
        onChange={log("changed")}
        onSubmit={onSubmit}
        onError={log("errors")} />


      

      </div>
  )
}
}
 
const mapStateToProps = state => {
  return {
    friends: state.friends,
  }
}
export default connect(mapStateToProps, { fetchFriends, addFriend })(App)
