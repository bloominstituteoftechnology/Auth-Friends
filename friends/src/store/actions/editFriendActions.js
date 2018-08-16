import {UPDATED_FRIEND, UPDATING_FRIEND, DELETED_FRIEND, DELETING_FRIEND } from './types.js';

/**
 *  {
    id: 1
    name: 'Joe',
    age: 24,
    email: 'joe@lambdaschool.com',
  {
 */

const URL = `http://localhost:5000/api/friends`;


export const getFriend = () => {

}

export const addFriend = (friend) => {
    axios.post(URL + `/${friend}`, {
        id: friend.id,
        name: friend.name,
        age: friend.age,
        email: friend.email,
    })
}

export const updateFriend = () => {

}

export const deleteFriend = () => {

}