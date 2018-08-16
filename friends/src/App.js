import React, { Component } from 'react';
import FriendsList from './container/FriendsList';
import getAction from  './actions';

class App extends Component {
  componentDidMount(){
    getAction();//still have to map to props
  }
  render() {
    return (
      <div className="App">
        <FriendsList /* Some Props*/ />
      </div>
    );
  }
}

//const mapToProps = state=> {
//   return(

//   )
// }

export default App;
