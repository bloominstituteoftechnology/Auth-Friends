import axios from 'axios';

export const PROCESSING_DATA = 'PROCESSING_DATA';
export const PROCESSING_DATA_SUCCESS = 'PROCESSING_DATA_SUCCESS';
export const PROCESSING_DATA_ERROR = 'PROCESSING_DATA_ERROR';


export const getData = () =>{
return dispatch =>{
  dispatch({type:PROCESSING_DATA});
axios
.get('http://localhost:5000/api/friends')
.then(response=>{
       dispatch({type:PROCESSING_DATA_SUCCESS, payload:response.data});
     })
     .catch(err =>{
       console.log(err)
       dispatch({ type: PROCESSING_DATA_ERROR });
     });
}



}
