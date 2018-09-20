import React from 'react';

const DeleteFriend = (props) => {
  console.log('Delete Friend');
  console.log(props);
  console.log(props.id);
  return (
    <div
      className='delete-button'
      onClick={() => props.handleClick(props.id)}>
      Unfriend
    </div>
  )
}

export default DeleteFriend
