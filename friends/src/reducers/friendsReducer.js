import { 
  FETCHINGFRIENDS,
  FRIENDSFETCHED
} from '../actions'

const initalState = {
  fetchingFriends: false,
  friendsFetched: false,
  friends: [
    {
      id: 1,
      name: 'Joe',
      age: 24,
      email: 'joe@lambdaschool.com',
    },
    {
      id: 2,
      name: 'Austen',
      age: 45,
      email: 'austen@lambdaschool.com',
    },
    {
      id: 3,
      name: 'Ryan',
      age: 15,
      email: 'ryan@lambdaschool.com',
    }
  ],
  error: null
}

export const friendsReducer = (state = initalState, action) => {
  console.log('reducer', action)

  switch (action.type) {
    case FETCHINGFRIENDS:

    case FRIENDSFETCHED:

    default:
      return state;
  }
}