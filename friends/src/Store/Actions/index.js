import axios from 'axios';

const FETCH_FRIENDS = 'FETCH_FRIENDS';

export const friendsActions = friends => {
  const promise = axios.get('http://localhost:3000/api/friends')
  promise
    .then(response => {
      console.log(response)
    })
    .error(err => {
      console.log(err)
    })
}