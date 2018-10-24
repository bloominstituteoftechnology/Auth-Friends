import React from 'react';

export default props => {
  return (
    <div>
      {this.props.friends.map((item, index) => {
        return (
          <div key={index}>
            {/* {console.log(index + 1, this.props.singleFriend.id)} */}
            {this.props.singleFriend.id === index + 1 ? (
              // <form>
              //   <input type="text" />
              // </form>
              <h1>Sike</h1>
            ) : (
              <h1 onClick={() => this.props.updateFriend(item)}>{item.name}</h1>
            )}
          </div>
        );
      })}
    </div>
  );
};
