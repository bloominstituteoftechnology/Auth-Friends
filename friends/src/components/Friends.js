import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchingFriends } from '../actionCreators';
import logo from '../logo.svg';

class Friends extends Component {
  componentDidMount(){
    this.props.fetchingFriends();
  }
  render(){
    return (
      <div>
      {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <div>
            {this.props.friends.map(friend => {
              return <p key={friend.id}>{friend.name}</p>;
            })}
          </div>
        )}
        {this.props.error !==null ? <p>{this.props.error}</p> : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    friends: state.fetching.friends,
    fetching: state.fetching.fetchingFriends,
    error: state.fetching.error,
  }
}

export default connect(mapStateToProps, { fetchingFriends })(Friends);