import React from "react";
import { Route } from "react-router-dom";

function Test(props) {
  return (
    <>
      <Route
        path="/home"
        render={(props) => {
          return <div>HEY GUYS!!!!!!</div>;
        }}
      ></Route>
    </>
  );
}
export default Test;
