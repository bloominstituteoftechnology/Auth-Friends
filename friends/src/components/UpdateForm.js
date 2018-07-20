import React from 'react';

const UpdateForm = props => {
  return (
    <form>
      <input placeholder={props.friend.name} />
      <input placeholder={props.friend.email} />
      <input placeholder={props.friend.age} />
    </form>
  );
};

export default UpdateForm;