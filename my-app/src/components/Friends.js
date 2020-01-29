import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendsList from './FriendsList';

const Div = styled.div`
    display:flex;
    width:90%;
    margin:1% auto;
`;
const Friends = () => {
    const [ state, setState ] = useState([])

    useEffect(() => {
        // fetch initial data - but it's protected! Use axiosWithAuth to send the token on the header of the request
        axiosWithAuth()
          .get('/api/friends')
          .then(res => {
            console.log(res)  
            setState(res.data)
          })
          .catch(err => console.log(err));
      },[]);
      

      console.log('this is state',state)
    return(
        <Div>
            {state.map(item => 
            <FriendsList friend={item}/>
            )}
        </Div>
    )
}

export default Friends;