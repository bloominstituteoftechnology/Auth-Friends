import React, {Component} from "react";
import { connect } from 'react-redux';

class Friends extends Component {

}

const mapStateToProps = state => {
  return {
    error: state.friendsReducer.error,
  };
};

export default connect(mapStateToProps)(Friends);
