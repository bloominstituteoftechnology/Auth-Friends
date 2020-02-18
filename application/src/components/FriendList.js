import React, {useState, useEffect} from 'react';
import Friend from './Friend';

const FriendList = ({friends, getFriends}) => {
    const [pageLoad, onPageLoad] = useState(false);

    useEffect(() => onPageLoad(pageLoad => {
        console.log(getFriends)
        getFriends();
        return !pageLoad;
    }), [getFriends])
    return ( <Friend/> );
}

export default FriendList;