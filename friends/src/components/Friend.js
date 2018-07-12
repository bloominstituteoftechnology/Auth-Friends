import React from 'react';
import { connect } from "react-redux";

const Friend = props => {
  return (
    <li className="friend">{props.friend.name}</li>
  );
}

export default connect(null, null)(Friend);