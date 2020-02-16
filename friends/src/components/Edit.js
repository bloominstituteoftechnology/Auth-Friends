import React, {useState, useEffect} from 'react';


const Edit = () => {






  return (
    <section className='formField'>
      <section >
        <form className='forms'>
          <h1>Add A Friend</h1>
          <input type='text' placeholder='Name' value=''/>
          <input type='text' placeholder='Age' value='' />
          <input type='Email' placeholder='Email' pattern='' value='' />
          <button>Add</button>
        </form>
      </section>

      <section >
        <form className='forms'>
        <h1>Edit a Friend</h1>
          <input type='text' placeholder='Name' value=''/>
          <input type='text' placeholder='Age' value='' />
          <input type='Email' placeholder='Email' pattern='' value='' />
          <button>Edit</button>
        </form>
      </section>

      <section >
        <form className='forms'>
          <h1>Delete a Friend</h1>
          <input type='text' placeholder='Name' value='' />
          <input type='text' placeholder='Age' disabled />
          <input type='Email' placeholder='Email' disabled />
          <button>Delete</button>
      </form>
      </section>
    </section>
  )

}

export default Edit;