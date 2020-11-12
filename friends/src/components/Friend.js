import {useState} from 'react';
import {axiosWithAuth} from '../axiosAuth';
import {useBareInput} from 'jacobhooksjacob'

const Friend = (props) =>{
    const name = useBareInput('Name', props.friend.name);
    const age = useBareInput('Age', props.friend.age);
    const email = useBareInput('Email', props.friend.email);
    const [edit, setEdit] = useState(false);
    const handleEditClick = (e) =>{
        e.preventDefault();
        setEdit(true);
    }
    const submitEditClick = (e) =>{
        e.preventDefault();
        setEdit(false);
        axiosWithAuth().put('http://localhost:5000/api/friends/' + props.friend.id, {id:props.id, name: name.value, age: age.value, email: email.value}).then(res =>{
            console.log(res.data);
            props.up();
        })
    }
    const submitDeleteClick = (e) =>{
        e.preventDefault();
        axiosWithAuth().delete('http://localhost:5000/api/friends/' + props.friend.id).then(res =>{
            console.log(res.data);
            props.up();
        })
    }
    return(
        <div className='friend' key={props.friend.id}>
            <hr></hr>
            <h3>{edit? <p>name: {name.comp}</p> :props.friend.name}</h3>
            <p>age: {edit? age.comp :props.friend.age}</p>
            <p>email: {edit? email.comp :props.friend.email}</p>
            {edit? <button onClick={submitEditClick}>Submit Changes</button>:<button onClick={handleEditClick}>Edit {props.friend.name}</button>}
            <button onClick={submitDeleteClick}>Delete {props.friend.name}</button>
            <hr></hr>
        </div>
    )

}

export default Friend