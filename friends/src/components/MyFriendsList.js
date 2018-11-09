import React from 'react';
import {fetch} from "../actions/index";
import {connect} from 'react-redux';

class MyFriendsList extends React.Component {
  constructor() {           // may generate useless constructor warning !!!
    super()
  }

  componentDidMount() {
    this.props.fetch();
  }


  render() {

    if(this.props.error !== null) {
      return <h2> {this.props.error}</h2>
    }

    if(this.props.fetching) {
      console.log('locating friends...');
      return <h3> Looking for my some friends...</h3>

    }


    return (
      <div className = 'MyFriendsList-container'>
        <MyFriendsList friends = {this.props.friends}/>
      </div>

    )

  }

}

const mapStateToProps = (state) => {


  return{
    friends: state.reduxFriends.friends,
    fetching: state.reduxFriends.fetching,
    fetched: state.reduxFriends.fetched,
    error: state.reduxFriends.error

  }

};



export default connect (
  mapStateToProps,
  {
    fetch
  }
)(MyFriendsList)