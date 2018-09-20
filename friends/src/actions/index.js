import axios from 'axios';
export const BLAHBLAH = 'BLAHBLAH';



// export const getData = () => {
//   return (dispatch) => {
//     dispatch({ type: FETCHING_DATA });
//     axios
//       .get('https://swapi.co/api/people')
//       .then((response) => {
//         dispatch({ type: DATA_FETCH_SUCCESS, payload: response.data.results });
//       })
//       .catch((err) => {
//         console.log(err);
//         dispatch({ type: DATA_FETCH_ERROR });
//       });
//   };
// };