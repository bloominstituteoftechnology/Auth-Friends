import React from 'react';
import { Link } from 'react-router-dom';
import connect from 'react-redux/lib/connect/connect';

const Friend = props => {
  const { friend } = props

  return (
    <div key={friend.id}>
      <p>X</p>
      <h2>{friend.name}</h2>
      <h2>{friend.age}</h2>
      <h2>{friend.email}</h2>
      <Link to={`/update/${friend.id}`}>Update</Link>
    </div>
  )
}

const mapStateToProps = () => ({})
export default connect(mapStateToProps)(Friend)