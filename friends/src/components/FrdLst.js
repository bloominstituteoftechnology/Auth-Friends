import React from 'react';
import FrdIdv from './FrdIdv';

const FrdLst = (props) => {
  return (
    <div>
      {props.frds_arr.map(frd_idv => (
          <FrdIdv key={frd_idv.id} name={frd_idv.name} age={frd_idv.age} email={frd_idv.email} />
      ))}
    </div>
  )
}

export default FrdLst;