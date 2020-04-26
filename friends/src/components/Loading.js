import React from 'react';
import '../App.css';

export const Loading = () => {
  return (
    <div className='spinner'>
      <img
        src='https://miro.medium.com/max/1080/0*DqHGYPBA-ANwsma2.gif'
        alt='new'
      />
    </div>
  );
};

export default Loading;
