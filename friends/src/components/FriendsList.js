import React,{Component} from 'react'
import { connect } from 'react-redux';
import {getData} from '../actions/index.js';
import '../App.css';

class FriendsList extends Component {

  componentDidMount(){
    this.props.getData()

  }
render(){
  return (
    <div>
        <ul>
          {this.props.friends.map(friend => {
                  return <li key={friend.name}>{friend.name}</li>;
                })}
                 </ul>

  </div>
);

}
}
const mapStateToProps = state => ({
  friends:state.friends
})

export default connect(mapStateToProps, {getData})(FriendsList);
