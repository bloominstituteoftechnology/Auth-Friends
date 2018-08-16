import React from 'react';
import FriendsForm from './FriendsForm';

const Friend = ({
  friend: { id, name, age, email },
  onFormSubmit,
  isUpdating,
  isDeleting,
  onDelete,
}) => {
  return (
    <div
      style={{
        borderBottom: '1px solid #dbdbdb',
        marginBottom: '1rem',
        position: 'relative',
      }}
    >
      <button
        style={{
          position: 'absolute',
          right: '3rem',
          top: '1rem',
          border: 'none',
          padding: '0.25rem',
          backgroundColor: 'tomato',
          color: 'white',
          cursor: 'pointer',
        }}
        onClick={() => !isDeleting && onDelete(id)}
      >
        {isDeleting ? 'deleting...' : 'delete'}
      </button>
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
