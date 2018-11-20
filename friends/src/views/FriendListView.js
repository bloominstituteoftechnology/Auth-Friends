import React from "react";
import { connect } from "react-redux";
import FriendList from '../components/FriendList';
import {getFriends} from '../actions/index.js';


class FriendListView extends React.Component{
    constructor(){
        super();
    }

    componentDidMount(){
        console.log(this.props);
        this.props.getFriends();
        console.log('props'+this.props)
    }

    render(){
        if(this.props.fetching){
            return(
                <h1>Calling your Buds</h1>
            )
        }return(<div><FriendList friends={this.props.friends}/></div>)
    }

}


const mapStateToProps= state =>{
    return{
      fetching:state.fetchingFriends,
      friends: state.friends,
      error: state.error
  
    }
  }
  export default connect(
    mapStateToProps,{getFriends})(FriendListView); ;
    