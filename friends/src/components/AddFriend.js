import React from 'react';

const initialFriend = {
  id: "",
  name: "",
  age: "",
  email: ""
};

const AddFriend = () => {
  const [newFriend, setNewFriend] = useState(initialFriend);

  return (
    <form>
      <input 
        type='text'
        name='name'
        onChange={changeHandler}
        placeholder='Name'
        value={newFriend.name}
      />

      <input 
        type='number'
        name='age'
        onChange={changeHandler}
        placeholder='Age'
        value={newFriend.age}
      />

      <input 
        type='email'
        name='email'
        onChange={changeHandler}
        placeholder='Email@email.com'
        value={newFriend.email}
      />
    </form>
  )
}

export default AddFriend;