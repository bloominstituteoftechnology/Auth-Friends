import React, {useState} from 'react';

const FriendForm = (props) => {

    const [formValues, setFormValues] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        props.post(formValues);
        setFormValues({
            name: '',
            age: '',
            email: ''
        });
    }

    return (
        <div>
            <h2>Add Friend Form</h2>
            <form onSubmit = {handleSubmit}>
                <label htmlFor="name">Name
                    <input
                        type = "text"
                        name="name"
                        value = {formValues.name}
                        onChange = {e => setFormValues({...formValues, name: e.target.value})}
                    />
                </label>
                <label htmlFor="age">Age
                    <input
                    type = "text"
                    name="age"
                    value = {formValues.age}
                    onChange = {e => setFormValues({...formValues, age: e.target.value})}
                    />
                </label>
                <label htmlFor="email">Email
                    <input
                    type = "text"
                    name="email"
                    value = {formValues.email}
                    onChange = {e => setFormValues({...formValues, email: e.target.value})}
                    />
                </label>
                <button type = "submit">Add Friend</button>
    </form>
        </div>
    )
}

export default FriendForm;