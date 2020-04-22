import React, {useState, useEffect} from 'react';
import Links from './Links';
import Friend from './Friend';
import Loader from 'react-loader-spinner';
import axiosWithAuth from '../utils/axiosWithAuth';
import { Link } from 'react-router-dom';

const Friends = (props) => {
    const [friends, setFriends] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
  
  useEffect(() =>{
      const getFriends = () => {
    axiosWithAuth()
    .get('/api/friends')
    .then(response => {
        setFriends(response.data);
        setIsFetching(false);
    })
    .catch(error => console.log(error));
    };
    setTimeout(() => {
        getFriends();
    }, 1500);
  }, []) 
    return (
        <div className='friends-list'>
            <Links/>
            <Link to='/friends/add'>Add Friend</Link>
            <div className='title is-2'>Friends List</div>
            <div id='spinner'>
            {isFetching && (
                <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
            )}
            </div>
            <div className='friends'>
                {friends.map(fr =><Friend friend={fr} key={fr.id}/>)}
            </div>
        </div>
    )
} 

export default Friends;