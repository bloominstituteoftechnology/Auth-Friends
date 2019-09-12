import React from "react";
import { axiosWithAuth } from "./AxiosAuth";

const Friend = props => {
  const handleEdit = e => {
    e.preventDefault();
    props.history.push(`/edit/${props.friend.id}`);
  };
  return (
    <div>
      <button onClick={e => handleEdit(e)}>Edit</button>
      {props.friend.name}
      <button onClick={e => props.handleDelete(e, props.friend.id)}>
        delete
      </button>
    </div>
  );
};

export default Friend;
