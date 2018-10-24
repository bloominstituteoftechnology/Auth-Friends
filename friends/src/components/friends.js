import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData, updateFriend, addFriend } from '../actions';
import AddFriend from './AddFriend';

class Friends extends Component {
  constructor() {
    super();
    this.state = {
      friend: '',
      age: ''
    };
  }
  componentDidMount() {
    this.props.fetchData();
  }

  handleNewFriend = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  updateDatabase = e => {
    console.log('im reached');
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1> Lambda Friends</h1>
        {this.props.friends.map((item, index) => {
          return (
            <div key={index}>
              {/* {console.log(index + 1, this.props.singleFriend.id)} */}
              {this.props.singleFriend.id === index + 1 ? (
                // <form>
                //   <input type="text" />
                // </form>
                <h1>Sike</h1>
              ) : (
                <h1 onClick={() => this.props.updateFriend(item)}>
                  {item.name}
                </h1>
              )}
            </div>
          );
        })}
        <AddFriend
          handleNewFriend={this.handleNewFriend}
          updateDatabase={this.updateDatabase}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    err: state.friendsReducer.err,
    fetching: state.friendsReducer.fetching,
    singleFriend: state.singleFriendReducer.friend,
    updateBool: state.singleFriendReducer.updateFriend
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchData()),
    updateFriend: friend => dispatch(updateFriend(friend)),
    addFriend: friend => dispatch(addFriend(friend))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Friends);
