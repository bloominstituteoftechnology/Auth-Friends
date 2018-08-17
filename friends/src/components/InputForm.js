import React from 'react';

export default function InputForm (props) {
    return(
        <div>
          <form onSubmit={this.onSubmitAddHandler}>
              <input 
              onChange={this.inputChangeHandler}
              type="text"
              value={props.newFriend}
              />
              <button>Add Friend</button>
          </form>
        </div>
    );
}
