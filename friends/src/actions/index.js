import axios from 'axios';
import thunk from 'redux-thunk';

export const FETCHING='FETCHING'; //
export const FETCHED='FETCHED'; //
export const ERROR='ERROR'; //
export const SAVING='SAVING';
export const SAVE='SAVED';
export const UPDATING='UPDATING';
export const UPDATED='UPDATED';
export const DELETING='DELETING';
export const DELETED='DELETED';


export const getFriends=()=>dispatch=>{
    dispatch({type: FETCHING})
axios
.get('http://localhost:5000/api/friends')
.then(response=>{
    dispatch({type:FETCHED, payload: response.data.results})
})
.catch(err=>{
    dispatch({type:ERROR, message:'got an error'})
})
}

