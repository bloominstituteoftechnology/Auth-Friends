import React from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
    let history = useHistory();
    const logout = () => {
      localStorage.removeItem("authToken");
      history.push("/");
    };
  
    return (
      <div onClick={logout}>Logout</div>
    )
  }
  
  export default Logout;