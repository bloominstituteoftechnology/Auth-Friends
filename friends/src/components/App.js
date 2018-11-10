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

  handleChange = e => {
    this.setState ({[e.target.name]: e.target.value});
  };

  handleSubmit = () => {
    this.props.addFriend({
      name: this.state.name,
      age: this.state.age,
      email: this.state.email


    });

    this.setState({name: ''});

  };

  render() {

    return (
      <div>
        <h1>Redux Friends</h1>

        <input
          type = 'text'
          placeholder = 'name'
          name = 'name'
          value = {this.state.name}
          onChange = {this.handleChange}
        />

        <input
          type = 'text'
          placeholder = 'age'
          name = 'age'
          value = {this.state.age}
          onChange = {this.handleChange}
        />

        <input
          type = 'text'
          placeholder = 'email'
          name = 'email'
          value = {this.state.email}
          onChange = {this.handleChange}
        />

        <button onClick={this.handleSubmit}> Add Friend</button>


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