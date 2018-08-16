import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { friendsFetch } from "./actions/index";
import FriendsList from "./components/friendsList";
import SubmitFriendForm from "./components/submitForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whom: -1,
      mode:'Input'
    }
  }
  singleUserMode = (id,mode)=>{
    this.setState({
      whom: id,
      mode:mode
    })
  }
 
  componentDidMount() {
    this.props.friendsFetch();
  }


  render() {
    return (
      <div className="App">
      <div onClick={()=>{this.setState({whom:-1,mode:'Input'})}}>Home</div>
        {this.props.friendsFetched ? (  
             <FriendsList singleUserMode={this.singleUserMode} friendID = {this.state.whom} friends={this.props.friends}/> 
        ) : (
          <div> LOADERING </div>
        )}
        <SubmitFriendForm singleUserMode={this.singleUserMode} friendID = {this.state.whom} mode={this.state.mode}/>
        {this.props.friendsSaved ?(<div> Friend Added</div>):(<div></div>)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friendsFetched: state.listReducer.friendsFetched,
    friends: state.listReducer.friends,
    friendsSaved: state.listReducer.friendsSaved
  };
};

export default connect(
  mapStateToProps,
  { friendsFetch }
)(App);
