import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { getFriends } from "../actions";

const Friends = (props) => {
  useEffect(() => {
    props.getFriends();
  }, []);

  return (
    <div>
      <h3>Friends</h3>

      {props.loading ? (
        <Loader type="ThreeDots" color="#7350E2" height="100" width="100" />
      ) : (
        props.friends.map((friend) => (
          <Link to={`/dashboard/friends/${friend.id}`} key={friend.id}>
            <p> {friend.name}</p>
          </Link>
        ))
      )}
      {props.error && <p className="errorMessage">{props.error}</p>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    loading: state.loading,
    error: state.error,
  };
};
export default connect(mapStateToProps, { getFriends })(Friends);
