import React, { Component } from 'react';
import { connect } from 'react-redux';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
// import './styles/App.css';
import { fetchData, addFriend, updateForm } from './actions';
class App extends Component {

  state = {
    inputData: {
      name: '',
      age: '',
      email: '',
    },
  };
  
  componentDidMount() {
    this.props.fetchData();
  }
  
  handleInput = (event) => {
    this.setState({
      inputData: {
        ...this.state.inputData,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleAdd = (event) => {
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