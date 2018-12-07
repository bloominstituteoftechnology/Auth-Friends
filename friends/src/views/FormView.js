import React from "react";
import { connect } from "react-redux";

import Form from "../components/Form";
import { addFriend, updateFriend } from "../store/actions";

const FormView = props => {
  return <Form {...props} />;
};

export default connect(
  null,
  { addFriend, updateFriend }
)(FormView);
