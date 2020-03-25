import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

import { FriendCard } from './FriendCard';

export const FriendsList = () => {
    const[isLoading, setIsLoading] = useState(false);
    const[friends, setFriends] = useState([]);
    const[error, setError] = useState('');

    useEffect(() => {
        setIsLoading(true);
        setError('');
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(res => {
                console.log(res);
                setFriends(res.data);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
                setError(`Error: ${err.response.status} ${err.response.statusText}`);
            });
    }, []);
        
    return (
        <div>
            { isLoading && (
                <div>
                    <h2>Loading All Friends...</h2>
                </div>
            )}
            { error && !isLoading && (
                <div>
                    <h2>{error}</h2>
                </div>
            )}
            { !error && !isLoading && (
                <div>
                    {friends.map(friend =>
                        <FriendCard 
                            friend={friend} 
                            key={friend.id}
                        />
                    )}
                </div>
            )}
        </div>
    );
}