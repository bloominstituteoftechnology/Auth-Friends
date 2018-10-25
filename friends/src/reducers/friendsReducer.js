
const initalState = {


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
  ]
}

export const friendsReducer = (state = initalState, action) => {
  console.log('reducer', action)

  return state;
}