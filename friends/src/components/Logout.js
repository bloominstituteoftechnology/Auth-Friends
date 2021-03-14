import React from "react";
import { Link, useHistory } from "react-router-dom";

const Logout = () => {
  let history = useHistory();
  const logout = () => {
    localStorage.removeItem("authToken");
    history.push("/");
  };

  return <Link onClick={logout}>Logout</Link>;
};

export default Logout;
