import React from 'react';
import {useHistory} from 'react-router-dom';
import {Card,CardTitle,CardText, CardSubtitle,Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';

function List(props){

const history = useHistory();

 const handleDelete=()=>{
     axiosWithAuth()
     .delete(`/api/friends/${props.item.id}`)
     .then(res=>{
         console.log('res after delete',res)
         props.setDeleteFriend(true);
     })
     .catch(err=>console.log('error in delete',err))
 }

 const handleModify=()=>{
     //Route to Form for the respective id
     history.push(`/edit/${props.item.id}`)
 }

return(
    <div className="friendCard" >
    <Card >
        <Link to= {`/friends/${props.item.id}`}> 
            <CardTitle>{props.item.name}</CardTitle>
        </Link>
        <CardSubtitle>Age: {props.item.age}</CardSubtitle>
        <CardText>Email: {props.item.email}</CardText>
    </Card>
    <Button color="danger" onClick={handleDelete}>Delete</Button>
    <Button color="info" onClick={handleModify}>Modify</Button>
    </div>
)
}
export default List;
