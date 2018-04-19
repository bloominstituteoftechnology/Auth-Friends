import { ADD_TODO } from './ActionCall';

export default (friends = [{testing: 'name', something: 'nope'}], action) => {
    switch (action.type) {
      case ADD_TODO:
        return [...friends, action.payload];
      default:
        return friends
    }
  }
