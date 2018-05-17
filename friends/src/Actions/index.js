import axios from 'axios';
export const FETCH_AVENGERS = 'FETCH_AVENGERS';
export const FETCHING_AVENGERS = 'FETCHING_AVENGERS';
export const SAVING_FRIENDS = 'SAVING_FRIENDS';

export const fetchAvengers = () => {
  const getAvengers = axios.get('http://localhost:5000/api/friends');
  return function(dispatch) {
    dispatch({ type: FETCHING_AVENGERS });
    getAvengers
      .then(response => {
        dispatch({ type: FETCH_AVENGERS, payload: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};


export const savingFriends = (data) =>{ 
    const postAvengers = axios.post(`http://localhost:5000/api/friends`,{
        name: data.name,
        age: data.age,
        email: data.email,
    });
    return function(dispatch) {
    dispatch({ type: SAVING_FRIENDS });
    postAvengers
        // .then(response => {
        // this.setState(() => ({
        //     name: '',
        //     age: '',
        //     email: '',
        // }));
        // })
        .catch(error => {
        console.error(error);
        });
      }
  }