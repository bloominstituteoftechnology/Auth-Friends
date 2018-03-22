import axios from 'axios';
import AddFriend from '../components/AddFriend';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

const addFriend = () => dispatch => {
  dispatch({ type: FETCHING });

  axios
    .post('http://localhost:5000/api/friends', {
      name: this.props.state.name,
      age: this.props.state.age,
      email: this.props.state.email
    })
    .then(response => {
      this.setState({
        name: '',
        age: '',
        email: ''
      });
      this.props.onSubmit();
    })

    .catch(error => {
      console.log(`There was an error adding a new friend: ${error}`);
    });
};

export default addFriend;
