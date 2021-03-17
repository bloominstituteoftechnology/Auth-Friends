import React from "react";
import { Link, useHistory } from "react-router-dom";

const Logout = () => {
  let history = useHistory();
  const logout = () => {
    console.log("logged out");
    localStorage.clear();
    history.push("/");
  };

  return (
    <div
      className="d-flex flex-column justify-content-between align-items-center"
      style={{
        marginTop: "20rem",
        minHeight: "20vh",
        backgroundColor: "#222",
        color: "white",
      }}
    >
      <Link
        onClick={() => logout()}
        style={{
          margin: "5vh 0",
          fontSize: "5vh",
          color: "white",
          textDecoration: "none",
          border: '.05rem solid white',
          padding: '2rem 3rem'
        }}
      >
        <h4>
        ログアウト - Logout</h4>
      </Link>
      <div className="d-flex flex-column justify-content-between align-items-center">
        <h6 style={{ marginTop: "10rem" }}>- S T R E E T A R T -</h6>
        <h6 style={{ lineHeight: "2" }}>
          Tokyo . Honolulu . Los Angeles . Seattle
        </h6>
        <h3>ストリートアート</h3>
      </div>
      <div>
        <h6>Contact us: tony.miller@blackthought.tech</h6>
      </div>
    </div>
  );
};

export default Logout;
