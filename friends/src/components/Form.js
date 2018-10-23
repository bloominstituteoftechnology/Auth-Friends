import React from 'react';

let Form = props => {
    return (
        <form onSubmit={props.submitHandler} >
            <p>Please enter your friend's data below:</p>
            <input name='name' type="text" value={props.value} placeholder="What's your friend's first name?" onChange={props.changeHandler}/>
            <input name='age' type="number" value={props.value} placeholder="How old is your friend?" onChange={props.changeHandler}/>
            <input name='email' type="email" value={props.value} placeholder="What's your friend's email?" onChange={props.changeHandler}/>
            <input type="submit" />
        </form>
    )
}

export default Form;