import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import { addFriend, updateFriend, setCurrent, clearCurrent } from '../actions';


function Friends_Form(props) {

    const [friend, setFriend] = useState({
        name: '',
        age: '',
        email: '',
        id: null
       
    })

    const {current, friends} = props;

    useEffect(() => {
        if (current !== null)
        setFriend({
            name: current.name,
            age: current.age,
            email: current.email,
            id: current.id

        })

         else
         setFriend( {
        name: '',
        age: '',
        email: '',
        id: null


         })
    },[current])

    const createIds = () => {

        const ids = friends.map(friend => friend.id);
        const maxId = friends.length > 0 ? Math.max(...ids) : 0 ;
        return maxId + 1
    }

    const onChange = e => {

        if (current === null)
        setFriend({
        ...friend,
        id: createIds(),
        [e.target.name]: e.target.value,
        })
        else
        setFriend({
            ...friend,
         
            [e.target.name]: e.target.value,
            })


    }
        

    const onSubmit  = e => {
        e.preventDefault();
        if (current === null) 
            props.addFriend(friend);
        
         else {
             
            
             props.updateFriend(friend);
             props.clearCurrent();
         }
            
        
        setFriend({
            name: '',
            age: '',
            email: '',
            id: null
         
        })
    }

    return (
        <div>
            <form onSubmit = {onSubmit}>
                <h2>{(current !== null) ? 'Edit Friend' : 'Add Friend'}</h2>
                <input type='text' placeholder = 'name' name = 'name' value= {friend.name} onChange = {onChange} required />
                <input type='number' placeholder = 'age' name = 'age' value= {friend.age} onChange = {onChange} />
                <input type='email' placeholder = 'email' name = 'email' value= {friend.email} onChange = {onChange} />
                 <div>
                     <button className = 'btnDiv' type = 'submit'>Submit</button>
                 </div>
            </form>


        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        current: state.current,
        friends: state.friends
        
    }
}


export default connect(mapStateToProps, {addFriend, updateFriend, setCurrent, clearCurrent})(Friends_Form)
