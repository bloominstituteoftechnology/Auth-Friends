import React from "react";

const Error = props => {
  return props.error !== null ? <div>{props.error}</div> : null;
};

export default Error;
