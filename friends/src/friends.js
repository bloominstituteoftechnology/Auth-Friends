
//-- Dependencies --------------------------------
import React from "react";
import {connect} from "react-redux";
import * as actions from './redux/actions.js';


//== Friends Component =========================================================

let Friends = class extends React.Component {

  //-- Lifecycle -----------------------------------
  componentDidMount() {
    this.props.getFriends();
  }

  //-- Rendering -----------------------------------
  render() {
    return (
      <div className="friends">

      </div>
    );
  }

  //-- Interaction ---------------------------------
}


//==============================================================================

//-- Redux Coupling ------------------------------
function mapStateToProps(state) {
  console.log(state)
  return {state}
}
Friends = connect(mapStateToProps, {
  getFriends: actions.getFriends,
})(Friends);

//-- Exporting -----------------------------------
export default Friends;
