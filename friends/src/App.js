import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/All">Home</NavLink>
          <NavLink to="/AddFriend">Home</NavLink>
        </div>


      
      </Nav>
      
        <Route exact path="/" component={HomeViews}></Route>
          <Route path="/All" component={}></Route>
        <Route path="/AddFriend" component={}
        
        render={props => (<ItemForm {...props}></ItemForm>)} ></Route>
        
      
      </div>
    );
  }
}

export default App;
