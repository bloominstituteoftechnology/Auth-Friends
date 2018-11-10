import React, {Component} from 'react';
// import {fetch, addFriend} from "../actions";
import {connect} from 'react-redux';
import {fetch, addFriend} from "../actions";


class App extends Component {
  /*
  constructor() {           // may generate useless constructor warning !!!
    super()
  }
*/
  state = {
    name: '',
    age: '',
    email: ''
  };


  componentDidMount() {
    this.props.fetch();
  }



  render() {

    if(this.props.error !== null) {
      return <h2> {this.props.error}</h2>
    }

    if(this.props.fetching) {
      console.log('locating friends...');
      return <h3> Looking for my friends...</h3>

    }


    return (
      <div>
        <h1>Redux Friends</h1>

        <input
          type = 'text'
          placeholder = 'name'
          name = 'name'
          value = {this.state.name}

        />

        <input
          type = 'text'
          placeholder = 'age'
          name = 'age'
          value = {this.state.age}

        />

        <input
          type = 'text'
          placeholder = 'email'
          name = 'age'
          value = {this.state.email}

        />

        <button> Add Friend</button>


        <ul>
          {this.props.friends.map( friend => {
            return (
              <div key = {friend.id}>
                <li>{friend.name}</li>



              </div>
            )


          })}



        </ul>





      </div>

    )

  }

}

const mapStateToProps = (state) => {


  return{
    friends: state.friends,
    fetching: state.fetching,
    fetched: state.fetched,
    error: state.error

  }

};



export default connect (
  mapStateToProps,
  {
    fetch,
    addFriend
  }
)(App)