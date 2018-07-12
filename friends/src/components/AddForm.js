import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

const AddFriend = (props) => {
    let nameInput, ageInput, emailInput;
    return (
        <form className="add-form" onSubmit= {
            e => {
                e.preventDefault()
                if (!nameInput.value || !ageInput.value || !emailInput.value) {
                    return;                    
                }
                props.addFriend({
                    newName: nameInput.value,
                    newAge: ageInput.value,
                    newEmail: emailInput.value
                })
                nameInput.value = '';
                ageInput.value = '';
                emailInput.value = '';
            }
        }>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" ref={node => nameInput = node} />
            <label htmlFor="age">Age</label>
            <input type="text" id="age" ref={node => ageInput = node} />
            <label htmlFor="email">Email</label>
            <input type="text" id="email" ref={node => emailInput = node} />
            <button className="add-button" type="submit">Add Friend</button>
        </form>
    );
}

export default connect(null, { addFriend })(AddFriend);