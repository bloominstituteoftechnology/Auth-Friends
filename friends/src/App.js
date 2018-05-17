import React, { Component } from "react";
// import { connect } from 'react-redux';

import {Route} from 'react-router';
// import { withRouter } from 'react-router-dom';


import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import FriendsList from "./components/Friends/FriendsList";
import SaveFriend from "./components/Friends/SaveFriend";
import Friend from "./components/Friends/Friend";

import './components/Nav/Nav.css'
import NavWrapper from './components/Nav/NavWrapper';
import menuData from "./menuData";

// pull in actions from action/index
// import { fetchData } from './actions';


class App extends Component {
  constructor() {
    super();
    this.state = {
      menu: []
    };
  }

  componentWillMount() {
    this.setState({ menu: menuData.data });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Friends</h1>
        </header>
        <Route path="/" render={ (props) => <NavWrapper {...props} menuData={this.state.menu}/> } />
        <Route exact path="/add-friend" component={SaveFriend} />
        <Route exact path="/search" component={FriendsList} />
        <Route path="/friend/:id" component={Friend}/>
      </div>
    );
  }
}

export default (App);

// const mapDispatchToProps = state => {
//   const { friendsReducer } = state;
//   return friendsReducer;
// };


// React Router Redux
// export default withRouter(
//     connect(mapDispatchToProps)(App)
// );