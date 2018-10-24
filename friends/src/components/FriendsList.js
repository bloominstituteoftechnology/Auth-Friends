import React from 'react';

export default props => {
  return (
    <div>
      {props.friends.map((item, index) => {
        return (
          <div key={index}>
            {/* {console.log(index + 1, this.props.singleFriend.id)} */}
            {props.singleFriend.id === index + 1 ? (
              <form onSubmit={e => props.updateSingleFriend(e, item.id)}>
                <input
                  type="text"
                  name="singleFriendFriend"
                  onChange={props.singleFriendUpdate}
                  placeholder="name"
                />
                <input
                  type="text"
                  name="singleFriendAge"
                  onChange={props.singleFriendUpdate}
                  placeholder="age"
                />
                <input
                  type="text"
                  name="singleFriendEmail"
                  onChange={props.singleFriendUpdate}
                  placeholder="email"
                />
                <button
                  type="submit"
                  onSubmit={e => props.updateSingleFriend(e, item.id)}
                />
              </form>
            ) : (
              <div onClick={() => props.updateFriend(item)}>
                <h1>{item.name}</h1>
                <h1>{item.age}</h1>
                <h1>{item.email}</h1>
                <button onClick={() => props.databaseDeleteFriend(item.id)}>
                  Delete
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
