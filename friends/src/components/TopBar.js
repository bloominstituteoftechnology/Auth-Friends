import React from 'react';

const TopBar = props => {
    return(
        <div className='top-bar'>
          <div className='title'>
            <div className='color-bar'>&nbsp;</div>
            <h1>friends list</h1>
          </div>
          <div className='add-friend' onClick={props.toggleAddForm}>
            <i className="fas fa-plus"></i>
            <i className="fas fa-user"></i>
            <p>Add friend</p>
          </div>
        </div>
    );
}

export default TopBar;