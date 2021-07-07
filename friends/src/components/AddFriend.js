import {useCompleteInput} from 'jacobhooksjacob'
import {axiosWithAuth} from '../axiosAuth'
const AddFriend = (props) =>{

    const name = useCompleteInput('Name');
    const email = useCompleteInput('Email');
    const age = useCompleteInput('Age');

    const handleSubmit = (e) =>{
        e.preventDefault();
        axiosWithAuth().post('http://localhost:5000/api/friends', {id:props.id, name: name.value, age: age.value, email: email.value}).then(res =>{
            console.log(res.data);
            props.up();
            name.reset();
            age.reset();
            email.reset();
        })
    }
    return(
        <form onSubmit={handleSubmit}>
            <h2>Add a Friend</h2>
            {name.comp}
            {email.comp}
            {age.comp}
            <button type='submit'>Add</button>
        </form>
    )

}

export default AddFriend