import React from 'react';
import FriendsForm from './FriendsForm';

const Friend = ({
  friend: { id, name, age, email },
  onFormSubmit,
  isUpdating,
}) => {
  return (
    <div
      style={{
        borderBottom: '1px solid #dbdbdb',
        marginBottom: '1rem',
      }}
    >
      <h3>
        {name}, {age}
      </h3>
      <a href={`mailto:${email}`}>
        <small>{email}</small>
      </a>
      {isUpdating ? (
        <div>Updating...</div>
      ) : (
        <FriendsForm onFormSubmit={data => onFormSubmit(id, data)} />
      )}
    </div>
  );
};

export default Friend;
