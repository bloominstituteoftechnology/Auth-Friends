import axios from 'axios';

export const FETCH_FRIENDS_LOADING = 'FETCH_FRIENDS_LOADING';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILED  = 'FETCH_FRIENDS_FAILED';

export const friendsLoading = () => ( { type: FETCH_FRIENDS_LOADING } );

export const friendsLoadSuccess = data => ( {
  type: FETCH_FRIENDS_SUCCESS,
  payload: data
} );

export const friendsLoadFailure = error => ( {
  type: FETCH_FRIENDS_FAILED,
  payload: error
} );

export function fetchFriends() {
  return function( dispatch ) {
    dispatch( friendsLoading() );

    return axios
      .get( 'http://localhost:5000/api/friends' )
      .then( res => console.log( res ) )
      // .then ( res   => dispatch( friendsLoadSuccess( res.data ) ) )
      .catch( error => dispatch( friendsLoadFailure( error    ) ) );
  }
}