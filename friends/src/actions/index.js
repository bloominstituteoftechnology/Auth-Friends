import axios from 'axios';

export const LOGIN_LOADING         = 'LOGIN_LOADING';
export const LOGIN_SUCCESS         = 'LOGIN_SUCCESS';
export const LOGIN_FAILED          = 'LOGIN_FAILED';

export const FETCH_FRIENDS_LOADING = 'FETCH_FRIENDS_LOADING';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILED  = 'FETCH_FRIENDS_FAILED';

export const loginLoading   = () => ( { type: LOGIN_LOADING } );
export const friendsLoading = () => ( { type: FETCH_FRIENDS_LOADING } );

export const loginSuccess = data => ( {
  type: LOGIN_SUCCESS,
  payload: data
} );

export const friendsLoadSuccess = data => ( {
  type: FETCH_FRIENDS_SUCCESS,
  payload: data
} );

export const loginFailure = error => ( {
  type: LOGIN_FAILED,
  payload: error
} );

export const friendsLoadFailure = error => ( {
  type: FETCH_FRIENDS_FAILED,
  payload: error
} );

export function login( name, pass ) {
  return function( dispatch ) {
    dispatch( loginLoading() );
    console.log( 'name: ', name );
    console.log( 'pass: ', pass );

    return axios
      .post( 'http://localhost:5000/api/login', { username: name, password: pass } )
      // .then( res => console.log( res.data.payload ) )
      .then( res => dispatch( loginSuccess( res.data.payload ) ) )
      .catch( error => dispatch( loginFailure( error ) ) );
  }
}

export function fetchFriends() {
  return function( dispatch ) {
    dispatch( friendsLoading() );

    return axios
      .get( 'http://localhost:5000/api/friends' )
      .then( res => console.log( res ) )
      // .then ( res   => dispatch( friendsLoadSuccess( res.data ) ) )
      .catch( error => dispatch( friendsLoadFailure( error ) ) );
  }
}
