import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LogIn from './components/LogIn';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import { connect } from 'react-redux';



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/friendslist">Friend's List</Link>
            </li>
          </ul>
          <h1>Welcome to Friend's List!</h1>
          <Route path="/login" component={LogIn} />
          <PrivateRoute 
            path="/friendslist" 
            component={() => <FriendsList friends={this.props.friends} />}
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  }
}

export default connect (mapStateToProps, {}) (App);
