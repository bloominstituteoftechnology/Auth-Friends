// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCHING_FRIEND = 'FETCHING_FRIEND';
export const FRIEND_FETCH_SUCCESS = 'FRIEND_FETCH_SUCCESS';
export const FRIEND_FETCH_ERROR = 'FRIEND_FETCH_ERROR';

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://localhost:5000/api/friends`
// remember that now we have controll over our thunk-based

export const fetchFriends = () => {
  return dispatch => {
    dispatch({ type: FETCHING_FRIEND });
  
    axios
      .get(`http://localhost:5000/api/friends`)
      .then(response => {
        // console.log(response);
        dispatch({ type: FRIEND_FETCH_SUCCESS, payload: response.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FRIEND_FETCH_ERROR });
      })
  };
};

// textInput = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   saveFriendData = (event) => {
//     event.preventDefault();
//     const id = (this.state.friends[this.state.friends.length - 1].id + 1)
//     const friend = {id: id, name: this.state.name, age: this.state.age, email: this.state.email};

//     axios
//       .post('http://localhost:5000/api/friends', friend)

//       .then(response => 
//             this.setState({ friends: response.data, name: '', age: '', email: ''})
//           )
//       .catch(err => {
//         console.log(err);
//       });
//     // this.setState({name: '', age: '', email: ''});
//   };