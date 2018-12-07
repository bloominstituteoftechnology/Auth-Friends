import React from "react";

import Form from "../components/Form";

const FormView = props => {
  console.log(props);
  return <Form {...props} />;
};

export default FormView;
