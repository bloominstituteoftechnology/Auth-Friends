import React, { Component } from 'react';
import { connect } from 'react-redux';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
// import './styles/App.css';
import { fetchData, addFriend, updateForm } from './actions';
class App extends Component {
  //Set the initial state of the App component
  state = {
    inputData: {
      name: '',
      age: '',
      email: '',
    },
  };
  
  componentDidMount() {
    //When mounted, run the fetchData action which calls the API
    this.props.fetchData();
  }
  
  handleInput = (event) => {
    //Event handler for when you start typing in a form
    this.setState({
      inputData: {
        ...this.state.inputData,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleAdd = (event) => {
    //Event handler for when you click a button that you want to trigger info added
    event.preventDefault();
    this.props.addFriend(this.state.inputData);
    this.resetForm();
  };

  handleUpdate = (event) => {
    event.preventDefault();
  };
  
  resetForm() {
    this.setState({
      inputData: {
        name: '',
        age: '',
        email: '',
      },
    });
  }
  render() {
    return (
      <div className="App">
        {!this.props.dataFetched ? (
          <h1>Loading Data Please Wait...</h1>
        ) : (
          <React.Fragment>
            <FriendsList
              friends={this.props.friends}
              updateForm={this.props.updateForm}
            />
            <FriendForm
              inputData={this.state.inputData}
              handleInput={this.handleInput}
              handleAdd={this.handleAdd}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    //Basically maps actions and reducers to the state
    fetchingData: state.friendsReducer.fetchingData,
    dataFetched: state.friendsReducer.dataFetched,
    addingFriend: state.friendsReducer.addingFriend,
    updatingFriend: state.friendsReducer.updatingFriend,
    friends: state.friendsReducer.friends,
    error: state.friendsReducer.error,
  };
};

export default connect(
  mapStateToProps,
  {
    fetchData,
    addFriend,
    updateForm,
  }
)(App);