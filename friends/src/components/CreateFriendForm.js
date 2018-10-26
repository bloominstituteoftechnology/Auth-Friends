import React from 'react';

const CreateFriendForm = () => {
    return (
        <div>
            <form>
                <input name='name' placeholder='Name' type='text' />
                <input name='age' placeholder='Age' type='text' />
                <input name='email' placeholder='email' type='text' />
            </form>
            <button>SAVE FRIEND</button>
        </div>
    );
}
 
export default CreateFriendForm;