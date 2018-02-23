import { GET_FRIENDS, ADD_FRIEND, UPDATE_FRIEND, DELETE_FRIEND } from '../actions/friendActions';

export default (friends = [], action) => {
  console.log('The Reducer Ran');
  switch (action.type) {
    case GET_FRIENDS:
      return action.payload.data;
    case ADD_FRIEND:
      return [...friends, action.payload];
    case UPDATE_FRIEND:
      // find friend to update by index
      // return new array with updated friend
    case DELETE_FRIEND:
      // find friend to delete by index
      // delete friend
    default:
      return friends;
  }
};
