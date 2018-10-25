import React from 'react'
/* example friend object 
{
  id: 2,
  name: 'Austen',
  age: 45,
  email: 'austen@lambdaschool.com',
},
*/


const FriendCard = props => {
  const { id, name, age, email } = props;
  return (
    <div className="Friend-Card">
      <div className="card-email">{email}</div>
      <div className="id-wrapper">
        <span>{id}</span>
        <div className="main-content">
          <h2>{name}</h2>
          <h3>{age}</h3>
        </div>
      </div>
    </div>
  )
}

export default FriendCard;