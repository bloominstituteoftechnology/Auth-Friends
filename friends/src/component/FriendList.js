import React from "react";
// import { Route, Link, NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchFriends } from '../actions'


  class FriendList extends React.Component {

    componentDidMount() {
      this.props.fetchFriends();
    }
  
    render(){

      let displayItem = (this.props.fetching)? <h3>Data is Loading...</h3> 
      : this.props.friends.map( (friend) =>  <h3 key={friend.id}> {friend.name} </h3> );

  return (
    <section className="friendListContainer">
      {displayItem}
    </section>
  );
  }
};





const mapStateToProps = (state) => {
  console.log("FriendList mapState", state);
  return { 
    friends: state.fetching.friends,
    fetching : state.fetching.fetching 
  }; 
};


export default connect(
  mapStateToProps, 
  { fetchFriends }
  )(FriendList);


    //    {/* <Link to={`/smurf/${props.smurf.id}`} className="smurf">  */}

    //    this.props.friends.map( friend => {
    //     <div className="name">
    //       <h3>{this.props.friend.name}</h3>
    //       {/* <p onClick={event => props.deleteSmurf(event, props.smurf.id)}> X </p> */}
    //     </div>
    //     {/* <strong>{props.smurf.height} tall</strong>
    //     <p>{props.smurf.age} smurf years old</p> */}
    //   {/* </Link> */}
    // })
    //   {/* <button onClick={e => props.updateSmurf(props.smurf.id)}> Edit</button> */}